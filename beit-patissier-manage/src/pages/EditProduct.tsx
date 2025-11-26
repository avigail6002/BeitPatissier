import React, { useState, useCallback } from "react";
import Input from "../components/Input"; // מייבא את קומפוננטת ה-Input שלך
import Select from "../components/Select"; // מייבא את קומפוננטת ה-Select שלך

// הגדרות טיפוסים (כפי שהוגדרו בקומפוננטות שלך)
interface Option {
  label: string;
  value: string;
}

// קומפוננטה: ProductEditTab
export default function ProductEditTab() {
  const [images, setImages] = useState<{ url: string; file: File; isPrimary: boolean }[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [allergens, setAllergens] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [price, setPrice] = useState<string | number>(""); // מחיר רגיל
  const [salePrice, setSalePrice] = useState<string | number>(""); // מחיר מבצע
  const [availabilityStart, setAvailabilityStart] = useState("2025-12-24"); // תאריך לדוגמה
  const [availabilityEnd, setAvailabilityEnd] = useState("2025-11-24");   // תאריך לדוגמה
  const [isAvailable, setIsAvailable] = useState(false); // הצג זמינות באתר - המתג בתמונה מכובה
  const [isOutOfStock, setIsOutOfStock] = useState(false); // אזל מהמלאי - המתג בתמונה מכובה

  // ℹ️ אופציות לדוגמה (שודרגו עם אופציית "בחר" ריקה)
  const categories: Option[] = [
    { label: "בחר", value: "" },
    { label: "מאפים", value: "bakery" },
    { label: "עוגות", value: "cakes" },
  ];

  const allergensOptions: Option[] = [
    { label: "בחר", value: "" },
    { label: "גלוטן", value: "gluten" },
    { label: "אגוזים", value: "nuts" },
    { label: "לקטוז", value: "lactose" },
  ];

  const tagsOptions: Option[] = [
    { label: "בחר", value: "" },
    { label: "חדש", value: "new" },
    { label: "מבצע", value: "sale" },
  ];

  // 🛠️ פונקציות ניהול תמונות (כפי שפותחו בתשובה הקודמת)

  // טיפול בהעלאת תמונה
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        url: URL.createObjectURL(file),
        file,
        // קובע את התמונה הראשונה כראשית אם אין עדיין תמונות
        isPrimary: images.length === 0 ? true : false,
      }));
      setImages((prevImages) => [...prevImages, ...newFiles]);
    }
  };

  // טיפול במחיקת תמונה (במסך, כפתור מחיקה כללי)
  const handleDeleteImage = useCallback((indexToDelete: number) => {
    setImages((prevImages) => {
      const newImages = prevImages.filter((_, idx) => idx !== indexToDelete);
      // אם התמונה שנמחקה הייתה ראשית, וקיימות תמונות נוספות, יש לקבוע את הראשונה כראשית
      if (prevImages[indexToDelete].isPrimary && newImages.length > 0) {
        newImages[0].isPrimary = true;
      }
      return newImages;
    });
  }, []);
    
  // מחיקת תמונה ספציפית מהרשימה
  const handleSpecificImageDelete = useCallback((fileUrl: string) => {
    setImages(prevImages => {
        const indexToDelete = prevImages.findIndex(img => img.url === fileUrl);
        if (indexToDelete === -1) return prevImages;

        const isPrimary = prevImages[indexToDelete].isPrimary;
        const newImages = prevImages.filter((_, idx) => idx !== indexToDelete);

        if (isPrimary && newImages.length > 0) {
            newImages[0].isPrimary = true; // קובע את הבאה כראשית
        }
        return newImages;
    });
  }, []);

  // טיפול בקביעת תמונה ראשית
  const setPrimaryImage = useCallback((indexToSet: number) => {
    setImages((prevImages) =>
      prevImages.map((img, idx) => ({
        ...img,
        isPrimary: idx === indexToSet,
      }))
    );
  }, []);

  const handleSave = () => {
    console.log({
      name, category, allergens, tag, shortDescription, price, salePrice,
      availabilityStart, availabilityEnd, isAvailable, isOutOfStock,
      images: images.map(img => ({ name: img.file.name, isPrimary: img.isPrimary }))
    });
    alert("נתוני המוצר נשמרו (ב-Console)");
  };

  const handleCancel = () => {
    // איפוס כל השדות
    setImages([]);
    setName("");
    setCategory("");
    setAllergens([]);
    setTag("");
    setShortDescription("");
    setPrice("");
    setSalePrice("");
    setAvailabilityStart("2025-12-24");
    setAvailabilityEnd("2025-11-24");
    setIsAvailable(false);
    setIsOutOfStock(false);
  };
  
  const primaryImage = images.find(img => img.isPrimary);
  const selectedImages = images.filter(img => !img.isPrimary);
  const allSelectedImagesCount = images.length;


  // קומפוננטת מתג (Toggle Switch) - נחוצה לצורך העיצוב בתמונה
  const ToggleSwitch = ({ checked, onChange, label, className = "" }: { checked: boolean; onChange: (checked: boolean) => void; label: string; className?: string }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        <button
            onClick={() => onChange(!checked)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${checked ? 'bg-green-500' : 'bg-gray-300'}`}
        >
            <span className="sr-only">{label}</span>
            <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`}
            />
        </button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        
        {/* כותרת וטאבים */}
        <div className="flex items-center justify-between px-6 pt-6">
            <span className="text-xl font-bold">הוספת מוצר חדש</span>
            <button onClick={() => alert("סגירה")} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <div className="flex text-sm font-medium text-center text-gray-500 border-b">
            <div className="px-6 py-3 border-b-2 border-blue-600 text-blue-600 font-semibold">עריכת מוצר</div>
            <div className="px-6 py-3 border-b-2 border-transparent hover:text-gray-600">מטבח</div>
        </div>

        {/* טאב עריכת מוצר */}
        <div className="p-6 space-y-6">
          
          {/* ניהול תמונות */}
          <div className="flex justify-between items-start">
              <div className="flex flex-col space-y-2 pt-2 text-sm">
                  {/* כפתורים ניהוליים */}
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <button 
                        onClick={() => primaryImage && handleSpecificImageDelete(primaryImage.url)} 
                        className="text-gray-500 hover:text-red-600 flex items-center disabled:opacity-50" 
                        disabled={!primaryImage}
                    >
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        מחיקה
                    </button>
                    <button 
                        onClick={() => primaryImage && selectedImages.length > 0 && setPrimaryImage(images.findIndex(img => !img.isPrimary))} 
                        className="text-gray-500 hover:text-blue-600 flex items-center disabled:opacity-50" 
                        disabled={selectedImages.length === 0}
                    >
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        קבע כתמונה ראשית
                    </button>
                    <span className="text-gray-700">{allSelectedImagesCount} תמונות נבחרו</span>
                  </div>
              </div>

              {/* גלריית תמונות */}
              <div className="flex space-x-3 space-x-reverse">
                  {/* לחצן הוספה */}
                  <label htmlFor="image-upload" className="flex items-center justify-center w-24 h-24 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                      <input id="image-upload" type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>

                  {/* תמונה ראשית */}
                  {primaryImage && (
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-green-500 shadow-md">
                          <img src={primaryImage.url} alt="תמונה ראשית" className="w-full h-full object-cover" />
                          <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-1 rounded-bl-lg">
                              תמונה ראשית
                          </span>
                      </div>
                  )}

                  {/* תמונות משניות */}
                  {selectedImages.map((img, idx) => (
                      <div key={idx} className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-200`}>
                          <img src={img.url} alt={`מוצר ${idx + 2}`} className="w-full h-full object-cover" />
                          <button onClick={() => handleSpecificImageDelete(img.url)} className="absolute top-0 right-0 p-1 bg-black bg-opacity-50 text-white rounded-tr-lg hover:bg-opacity-75">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                          </button>
                          <button onClick={() => setPrimaryImage(images.findIndex(item => item.url === img.url))} className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 text-white text-xs py-0.5 hover:bg-opacity-75">
                              ראשי
                          </button>
                      </div>
                  ))}
              </div>
          </div>
          <div className="border-b"></div> {/* קו הפרדה */}


          {/* שדות שורה 1: שם מוצר וקטגוריה */}
          <div className="grid grid-cols-2 gap-4">
            <Input
                label="שם המוצר"
                placeholder="הכנס שם מוצר"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Select
                label="קטגוריה"
                options={categories}
                value={category}
                onChange={(val) => typeof val === "string" && setCategory(val)}
                multi={false}
            />
          </div>

          {/* שדות שורה 2: תגיות ואלרגנים */}
          <div className="grid grid-cols-2 gap-4">
            <Select
                label="תגיות"
                options={tagsOptions}
                value={tag}
                onChange={(val) => typeof val === "string" && setTag(val)}
                multi={false}
            />
            <Select
                label="מידע על אלרגנים"
                options={allergensOptions}
                value={allergens}
                onChange={(val) => Array.isArray(val) && setAllergens(val)}
                multi={true} // השתמש ב-multi כפי שנדרש בתמונה (בחירה מרובה)
            />
          </div>

          {/* תיאור קצר */}
          <Input
            label="תיאור קצר"
            placeholder="פה יבוא תיאור קצר של המוצר-הגולל יראה"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />

          {/* מחירים (דורש התאמה של קומפוננטת Input כדי לאפשר הטמעת סמל ₪) */}
          <div className="grid grid-cols-2 gap-4">
            {/* מחיר מבצע */}
            <div>
              <label className="text-sm font-medium mb-1 block">מחיר מבצע</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <span className="p-3 bg-gray-100 border-l border-gray-300 text-gray-500">₪</span>
                <input
                    type="number"
                    placeholder="00"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    className="w-full p-3 focus:outline-none"
                />
              </div>
            </div>
            {/* מחיר רגיל */}
            <div>
              <label className="text-sm font-medium mb-1 block">מחיר</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <span className="p-3 bg-gray-100 border-l border-gray-300 text-gray-500">₪</span>
                <input
                    type="number"
                    placeholder="בחר"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-3 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* זמינות ותאריכים */}
          <div className="grid grid-cols-3 gap-4">
            {/* תאריך התחלה - שימוש ב-Input עם אייקון */}
            <div className="flex flex-col gap-1 w-full">
                <label className="text-sm font-medium">תאריך התחלה</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 bg-white">
                    <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-4 14h.01M4 21h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    <input
                        type="date"
                        value={availabilityStart}
                        onChange={(e) => setAvailabilityStart(e.target.value)}
                        className="w-full focus:outline-none" // עיצוב פנימי
                    />
                </div>
            </div>
            
            {/* תאריך סיום - שימוש ב-Input עם אייקון */}
            <div className="flex flex-col gap-1 w-full">
                <label className="text-sm font-medium">תאריך סיום</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 bg-white">
                    <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-4 14h.01M4 21h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    <input
                        type="date"
                        value={availabilityEnd}
                        onChange={(e) => setAvailabilityEnd(e.target.value)}
                        className="w-full focus:outline-none" // עיצוב פנימי
                    />
                </div>
            </div>
            
            {/* מתגי זמינות */}
            <div className="flex flex-col justify-end space-y-3 pt-2">
                <div className="flex justify-between items-center text-sm font-medium text-gray-700">
                    <span className="text-gray-700">לא להציג זמינות באתר</span>
                    <ToggleSwitch
                        checked={isAvailable}
                        onChange={setIsAvailable}
                        label="הצג זמינות"
                    />
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-gray-700">
                    <span className="text-gray-700">אזל מהמלאי</span>
                    <ToggleSwitch
                        checked={isOutOfStock}
                        onChange={setIsOutOfStock}
                        label="אזל"
                    />
                </div>
            </div>
          </div>
          
          {/* כפתורי שמירה וביטול */}
          <div className="flex gap-4 pt-6 justify-start">
            <button
              onClick={handleSave}
              className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition duration-150 shadow-lg"
            >
              שמירה
            </button>
            <button
              onClick={handleCancel}
              className="bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-150"
            >
              ביטול
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}