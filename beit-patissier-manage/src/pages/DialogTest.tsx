import React, { useState } from "react";
import Dialog from "../components/Dialog";

export default function DialogTest() {
    const [open, setOpen] = useState(false);

    const rawHtml = `<h3>כותרת מתוך HTML</h3><p>תוכן מדגים יצירת HTML כ-string.</p>`;

    return (
        <div className="p-8">
            <h1 className="mb-4 text-xl font-bold">Dialog Test</h1>

            <button
                onClick={() => setOpen(true)}
                className="rounded bg-blue-600 px-4 py-2 text-white"
            >
                פתח פופאפ
            </button>

            <Dialog isOpen={open} onClose={() => setOpen(false)} title="דמו פופאפ" scrollable>
                <div>
                    <p>תוכן שנשלח כ־children — ניתן לשים טפסים וכפתורים.</p>

                    <button className="mt-4 rounded bg-green-600 px-3 py-2 text-white" onClick={() => alert("לחץ בתוך דיאלוג")}>
                        כפתור בתוך הדיאלוג
                    </button>

                    <hr className="my-4" />

                    <div>
                        <p className="mb-2 text-sm text-gray-600">הצגת HTML (STRING) — להדגמה בלבד:</p>
                        <div dangerouslySetInnerHTML={{ __html: rawHtml }} className="prose max-w-none" />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
