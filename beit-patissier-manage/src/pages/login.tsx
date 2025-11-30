import { useState } from "react";

import EmailIcon from "../assets/ICONS/email.svg";
import LockIcon from "../assets/icons/lock.svg";
import EyeIcon from "../assets/icons/eye-open.svg";
import EyeOffIcon from "../assets/icons/eye-closed.svg";
import GoogleIcon from "../assets/icons/google.svg";
import AppleIcon from "../assets/icons/apple.svg";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white overflow-hidden">
      <div className="w-[400px] h-[400px] rounded-2xl bg-white p-8 shadow-lg flex flex-col justify-between border border-[rgba(137,137,137,1)] shadow-none">
        <div>
          <h1 className="mb-6 text-center text-xl font-bold text-gray-900">
            ברוכים הבאים לפטיסייר
          </h1>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-right text-sm font-medium text-gray-700">
                אימייל
              </label>

              <div className="relative">
                <input
                  type="email"
                  placeholder="כתוב את הכתובת אימייל שלך"
                  className="w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-right text-gray-600 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                  dir="rtl"
                />

                <img
                  src={EmailIcon}
                  alt="אייקון אימייל"
                  className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-right text-sm font-medium text-gray-700">
                סיסמא
              </label>

              <div className="relative">
                <img
                  src={LockIcon}
                  alt="אייקון סיסמה"
                  className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 pointer-events-none"
                />

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
                  <img
                    src={showPassword ? EyeIcon : EyeOffIcon}
                    alt={showPassword ? "הסתר סיסמה" : "הצג סיסמה"}
                    className="h-5 w-5"
                  />
                </button>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="כתוב את הסיסמא שלך"
                  className="w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-right text-gray-600 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                  dir="rtl"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-black py-2 text-center font-medium text-white hover:bg-gray-900"
            >
              התחברות
            </button>
          </div>
        </div>

        <div>
          <div className="my-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-gray-400">או המשך עם</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="flex h-14 w-14 items-center justify-center rounded-xl border-[0.5px] border-[#C2C4CF] bg-transparent hover:bg-gray-100 transition">
              <img
                src={GoogleIcon}
                alt="התחברות עם Google"
                className="!w-10 !h-10 flex-shrink-0"
              />
            </button>
            <button className="flex h-14 w-14 items-center justify-center rounded-xl border-[0.5px] border-[#C2C4CF] bg-transparent hover:bg-gray-100 transition">
              <img
                src={AppleIcon}
                alt="התחברות עם Apple"
                className="!w-10 !h-10 flex-shrink-0"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}