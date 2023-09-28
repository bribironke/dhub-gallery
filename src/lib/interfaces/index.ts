export interface iImage {
  id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}


export interface iCData {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: [],
  bytes: number,
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  original_filename: string;
  api_key: string;
}

export interface DateTimeFormatOptions {
  year: "numeric" | "2-digit" | undefined;
  month: "numeric" | "2-digit" | "short" | "long" | "narrow" | undefined;
  day: "numeric" | "2-digit" | undefined;
}

export type TStatus = "info" | "alert" | "success" | "error"

export interface iStatus {
  type: TStatus,
  message: string
}

export type TColor = "blue" | "green" | "orange" | "red"

export type TEventType = "form submission" | "page navigation"