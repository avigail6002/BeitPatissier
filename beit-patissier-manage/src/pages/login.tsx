import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
<div className="flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-8 text-center text-2xl font-bold text-gray-900">
          ברוכים הבאים לפטיסייר
        </h1>

        <div className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="mb-2 block text-right text-sm font-medium text-gray-700">
              אימייל
            </label>

            <div className="relative">
              <input
                type="email"
                placeholder="כתוב את הכתובת אימייל שלך"
                className="w-full rounded-md border border-gray-300 py-3 pr-12 pl-4 text-right text-gray-500 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                dir="rtl"
              />

              <svg
                className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>


          {/* Password Field */}
          {/* Password Field */}
          <div>
            <label className="mb-2 block text-right text-sm font-medium text-gray-700">
              סיסמא
            </label>

            <div className="relative">

              {/* אייקון מנעול בתוך האינפוט - צד ימין */}
              <svg
                className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>

              {/* כפתור עין — בתוך האינפוט בצד שמאל */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
    absolute left-4 top-1/2 -translate-y-1/2
    text-gray-400 hover:text-gray-600
    !bg-transparent 
    border-0 
    p-0 
    shadow-none 
    outline-none 
    focus:outline-none
  "
              >



                {showPassword ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>

              {/* שדה הסיסמה */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="כתוב את הסיסמא שלך"
                className="w-full rounded-md border border-gray-300 py-3 pr-12 pl-4 text-right text-gray-500 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                dir="rtl"
              />
            </div>
          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 w-full rounded-full !bg-black py-3 text-center font-medium text-white transition hover:bg-gray-900"
          >
            התחברות
          </button>
        </div>


        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-sm text-gray-400">או המשך עם</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4">
          {/* Google */}
          <button className="flex h-14 w-14 items-center justify-center rounded-full border border-black bg-transparent hover:bg-gray-100 transition">
            <svg
              className="!w-10 !h-10 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </button>



          {/* Apple */}
          <button className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
            <svg
              className="!w-10 !h-10 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </button>

        </div>

      </div>

    </div>
  );
}