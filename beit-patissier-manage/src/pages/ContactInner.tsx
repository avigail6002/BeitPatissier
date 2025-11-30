import { useState } from 'react';

export function ContactInnerPage() {
  const [status, setStatus] = useState('waiting');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const statusOptions = [
    { value: 'waiting', label: 'ממתין לטיפול', color: 'bg-orange-400' },
    { value: 'in_progress', label: 'בטיפול', color: 'bg-blue-500' },
    { value: 'completed', label: 'טופל', color: 'bg-green-500' },
    { value: 'rejected', label: 'נדחה', color: 'bg-red-500' },
  ];

  const selectedOption = statusOptions.find((opt) => opt.value === status);

  return (
    <div className="flex h-screen bg-white font-sans text-right overflow-hidden px-[70px] py-[20px]" dir="rtl">
      
      <main className="flex-1 flex flex-col p-2 overflow-hidden gap-5">

        <div className="flex flex-col shrink-0">
          <div className="self-end mb-1 relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-6 border !border-gray-300 !rounded-md !px-3 !py-0.5 !bg-white hover:bg-gray-50 transition shadow-sm"
            >
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${selectedOption?.color}`}></span>
                <span className="text-gray-600 text-xs font-medium">{selectedOption?.label}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className={`text-black transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-1 left-0 w-full min-w-[120px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                {statusOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setStatus(option.value);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-right px-3 py-1.5 !text-[13px] text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition border-b last:border-0 border-gray-100"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${option.color}`}></span>
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <h1 className="!text-[22px] font-medium text-gray-900">פנייה</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 gap-x-4 shrink-0">
          <div>
            <p className="text-gray-500 text-sm mb-1">שם מלא</p>
            <p className="text-gray-900 text-sm">יהודית גולדברג</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">אימייל</p>
            <p className="text-gray-900 text-sm">y0532698856@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">טלפון</p>
            <p className="text-gray-900 text-sm">053-269-8856</p>
          </div>
        </div>

        <div className="shrink-0 mb-3">
            <p className="text-gray-500 text-sm mb-2">תוכן הפנייה</p>
            <div className='overflow-y-auto max-h-[40px] pl-2'>
            <p className="text-gray-900 text-sm leading-snug">
                תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר...
                תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר...
                תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר...
            </p>
            </div>
        </div>

        <hr className="border-black-200 shrink-0" />

        <div className="flex flex-col flex-1 min-h-0">
          <h2 className="!text-[22px] font-medium text-black-900 mb-3 shrink-0">תגובה מהמערכת</h2>

          <div className="relative flex-1 flex flex-col">
            <textarea
              className="w-full flex-1 border border-black-300 rounded-lg p-2 text-right text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black resize-none text-sm"
              placeholder="כאן תבוא תגובה של המערכת"
            ></textarea>
          </div>

          <div className="flex justify-between items-start mt-3 shrink-0">
            <button className="mt-4 !bg-transparent font-medium !border-none text-black hover:text-red-600 hover:underline transition text-lg">
              הנפקת זיכוי
            </button>
            
            <button className="!bg-black text-white text-sm px-10 py-2 !rounded-2xl shadow-md transition duration-300 hover:scale-[1.02] active:scale-95">
              שלח
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};
