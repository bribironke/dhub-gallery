import { redirect, fail } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

import { CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME } from "$env/static/private";

import { v2 as cloudinary } from "cloudinary"
import { Fields, FormDataKeys, type iCData, db } from "$lib";
import axios, { type AxiosProgressEvent } from 'axios'


const cloudinaryConfig = cloudinary.config({
  secure: true,
  api_key: CLOUDINARY_API_KEY,
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_secret: CLOUDINARY_API_SECRET
})

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, '/login')
  }
};

const timestampSignature = () => {
  const timestamp = Math.round(Date.now() / 1000)
  const signature = cloudinary.utils.api_sign_request(
    { timestamp },
    cloudinaryConfig.api_secret as string
  )
  return { timestamp: timestamp.toString(), signature }
}

const fileSize = (file: File): number => {
  const fileSizeInBytes = file.size;
  const fileSizeInMB = fileSizeInBytes / (1024*1024);
  return fileSizeInMB
}

const store = async (file: File) => {
  const { signature, timestamp } = timestampSignature()
  const uploadData = new FormData()
  uploadData.append(FormDataKeys.FILE, file)
  uploadData.append(FormDataKeys.APIKEY, CLOUDINARY_API_KEY)
  uploadData.append(FormDataKeys.SIGNATURE, signature)
  uploadData.append(FormDataKeys.TIMESTAMP, timestamp)

  try {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`
    const response = await axios.post(
      url,
      uploadData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (evt: AxiosProgressEvent) => {
          console.log(evt.loaded / (evt.total as number))
        }
      }
    )
    return { success: true, cdata: response.data as iCData }
  } catch (error: any) {
    return { success: false, errorMsg: error.message }
  }
}

const upload: Action = async ({ request, locals }) => {
  const data = await request.formData()
  // todo check if above 5MB and return error
  const file = data.get(Fields.FILE) as File

  if (file.name === "undefined") {
    return fail(401, { invalid: true })
  }
  console.log("file", file)
  const size = fileSize(file)
  if (size > 5) {
    return fail(400, { maxSizeExceeded: true })
  }

  const { success, cdata, errorMsg } = await store(file)

  console.log("secure url is", cdata?.secure_url)
  
  try {
    await db.image.create({
      data: {
        userId: locals.user.id,
        url: cdata?.secure_url as string,
      }
    })
    locals.user.images = await db.image.findMany({
      where: { userId: locals.user.id }
    })
  } catch (error: any) {
    return fail(400, { uploadError: true, errorMsg: error.message })
  }

  if (!success) {
    return fail(401, { uploadError: true, errorMsg  })
  }

  throw redirect(302, '/upload')
}

export const actions: Actions = {
  upload
};