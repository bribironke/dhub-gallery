# Dhub Image Gallery

This project is a simple web application that allows users to upload images and submit their contact information. The application provides a user-friendly interface and follows best practices for web development.

## Demo

A live demo of the application can be found [here](https://dhub-gallery.netlify.app/).

## Technologies Used

- Frontend: SvelteKit (HTML, CSS, JavaScript)
- Styling: TailwindCSS and Daisy UI
- Backend: Node.js with Express.js
- Database: PostgreSQL (via Supabase)
- File Storage: Cloudinary
- Authentication: Cookie-based authentication
- *Testing (WIP): Playwright (Integration), Vitest (Unit)

## Features

1. **User Registration and Authentication:**
   - Users can register and log in to the application.
   - User authentication is implemented to ensure only authenticated users can access the image upload and contact info submission functionality.

2. **Image Upload:**
   - Authenticated users can upload images.
   - Users can select an image file from their local device.
   - Uploaded images are validated to ensure they meet the required format (e.g., JPG, PNG, or GIF) and size limits (maximum 5MB).
   - A thumbnail preview of the uploaded image is displayed after the upload is complete.

3. **Contact Info Submission:**
   - Authenticated users can submit their contact information, including:
     - Full Name
     - Email Address
     - Phone Number
     - Address

4. **User Profile:**
   - Users have a profile page where they can view and edit their contact information.
   - They can also view their uploaded images.

5. **Security:**
   - Appropriate security measures are implemented to protect user data and prevent unauthorized access.
   - Uploaded images are stored securely and cannot be accessed directly via URL.

6. **User Experience:**
   - The application has a responsive design that works on both desktop and mobile devices.
   - Client-side validation is used for contact information fields to provide immediate feedback to users.


## Setup Instructions

1. Clone the repository to your local machine.
2. Set up the necessary environment variables (e.g., database credentials, Cloudinary API keys).
3. Install dependencies using `pnpm install`.
4. Start the application using `pnpm run dev`.

## Running Tests

- Integration Tests: `pnpm run test:integration`
- Unit Tests: `pnpm run test:unit`
