import  { useState } from 'react';

const ContactInnerPage = () => {
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
    <div className="flex h-screen bg-white font-sans text-right overflow-hidden" dir="rtl">

      <main className="flex-1 flex flex-col p-6 md:p-10 overflow-hidden">

        <div className="flex justify-between items-start mb-6 shrink-0">
          <h1 className="text-3xl font-bold text-gray-900">פנייה</h1>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-6 border border-black rounded-lg px-3 py-1.5 bg-white hover:bg-gray-50 transition shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${selectedOption?.color}`}></span>
                <span className="text-gray-700 text-sm font-medium">{selectedOption?.label}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className={`text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-1 left-0 w-full min-w-[160px] bg-white border border-black rounded-lg shadow-xl z-50 overflow-hidden">
                {statusOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setStatus(option.value);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-right px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition border-b last:border-0 border-black"
                  >
                    <span className={`w-2 h-2 rounded-full ${option.color}`}></span>
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4 mb-6 shrink-0">
          <div>
            <p className="text-gray-400 text-sm mb-1">שם מלא</p>
            <p className="text-gray-900 font-semibold text-lg">יהודית גולדברג</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">אימייל</p>
            <p className="text-gray-900 font-semibold text-lg">y0532698856@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">טלפון</p>
            <p className="text-gray-900 font-semibold text-lg">053-269-8856</p>
          </div>
        </div>


        <p className="text-gray-400 text-sm mb-2">תוכן הפנייה</p>
        <div className='overflow-y-auto max-h-[150px] pr-2 mb-8'>
          <p className="text-gray-900 leading-relaxed font-medium ">
            תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר...
            תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר...
            תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר...
            תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר תוכן הפניה שהיוזר שלח מהאתר...
          </p>
        </div>


        <hr className="border-black mb-6 shrink-0" />

        <div className="flex flex-col flex-1 min-h-0">
          <h2 className="text-xl font-bold text-gray-900 mb-4 shrink-0">תגובה מהמערכת</h2>

          <div className="relative flex-1 flex flex-col">
            <textarea
              className="w-full flex-1 border border-black rounded-lg p-4 text-right text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black resize-none"
              placeholder="כאן תבוא תגובה של המערכת"
            ></textarea>
          </div>

          <div className="flex justify-between items-center mt-6 shrink-0">
            <button className="!bg-transparent !border-none text-gray-600 font-medium hover:text-black hover:underline hover:underline-offset-4 transition">
              הנפקת זיכוי
            </button>
            <button className="!bg-black text-white text-lg px-10 py-3 !rounded-[15px] shadow-md transition duration-300 hover:scale-105 active:scale-95">
              שלח
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ContactInnerPage;