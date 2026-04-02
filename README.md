# Next.js Authentication Flow

A personal full-stack authentication project built with Next.js App Router, MongoDB, and JWT-based sessions.

The app includes:
- sign up
- login and logout
- email verification
- forgot password
- reset password
- protected profile routes

## Tech Stack

- Next.js 15 (App Router + Route Handlers)
- React 19 + TypeScript
- MongoDB + Mongoose
- JWT (`jsonwebtoken`) for cookie-based auth session
- `bcryptjs` for password and token hashing
- Nodemailer (Mailtrap SMTP) for verification/reset emails
- Tailwind CSS

## Features

- Credentials-based signup and login flow
- Password hashing before database storage
- Email verification via tokenized link
- Forgot password and reset password flow
- Protected profile routes with middleware checks
- Current user endpoint (`/api/users/me`)

## Project Structure

```text
src/
  app/
    api/users/
      signup/
      login/
      logout/
      me/
      verifyemail/
      forgotpassword/
      resetpassword/
    login/
    signup/
    verifyemail/
    forgotPassword/
    resetpassword/
    profile/
  dbConfig/
    dbConfig.ts
  helpers/
    getDataFromToken.ts
    mailer.ts
  models/
    userModel.js
  middleware.ts
```

## Authentication Flow

1. **Signup**
   - User submits name, email, and password.
   - Password is hashed and user is created in MongoDB.
   - Verification email is sent with a time-limited token.

2. **Email Verification**
   - User opens `/verifyemail?token=...`.
   - Token is validated against the DB and expiry.
   - User is marked as verified.

3. **Login**
   - Credentials are validated.
   - On success, a JWT is generated and stored in an `httpOnly` cookie named `token`.

4. **Protected Access**
   - Middleware checks for the auth cookie on protected routes.
   - `/api/users/me` reads user id from JWT and returns current user data.

5. **Forgot/Reset Password**
   - User requests reset link by email.
   - Reset token is verified with expiry.
   - New password is hashed and saved.

## Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
TOKEN_SECRET=your_jwt_secret
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
DOMAIN=http://localhost:3000
MYEMAIL=sender@example.com
```

Notes:
- `DOMAIN` is used to generate verification/reset links in emails.
- `.env` files are ignored by git.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add environment variables in `.env`.

3. Run development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run lint` - run ESLint

## API Endpoints

### Auth
- `POST /api/users/signup`
- `POST /api/users/login`
- `GET /api/users/logout`
- `POST /api/users/verifyemail`
- `POST /api/users/forgotpassword`
- `POST /api/users/resetpassword`

### User
- `GET /api/users/me`

## Personal Note

This project is built as a practical learning-by-building auth reference.  
The goal is to keep the flow clear, understandable, and easy to extend.
