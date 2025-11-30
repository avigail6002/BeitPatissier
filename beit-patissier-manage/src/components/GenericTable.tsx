import React from "react";

type TableProps<T> = {
    data: T[];
    translations: Record<string, string>;
};


const IconBase = ({ children, className = "", ...props }: any) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className={className}
    >
        {children}
    </svg>
);

const EditIcon = (props: any) => (
    <IconBase {...props} className="h-4 w-4 text-gray-700 hover:text-blue-600 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </IconBase>
);

const TrashIcon = (props: any) => (
    <IconBase {...props} className="h-4 w-4 text-gray-700 hover:text-red-600 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </IconBase>
);

const CloseIcon = () => (
    <IconBase className="w-2 h-2 ml-0.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </IconBase>
);

const allergenIcons = [
    {
        p: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
        d: "ביצה"
    },
    {
        p: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 8.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm7 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z",
        d: "בוטן/אגוז מוארך"
    },
    {
        p: "M12 21c-4.41 0-8-3.59-8-8s8-15 8-15 8 10.59 8 15c0 4.41-3.59 8-8 8zm0-18.73c-.02 0-.04 0-.06 0L4.5 13c0 3.86 3.14 7 7 7s7-3.14 7-7L12.06 2.27c-.02 0-.04 0-.06 0z",
        d: "חלב/טיפה"
    },
    {
        p: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z",
        d: "אגוז"
    },
    {
        p: "M21 7.5c0 .87-.36 1.7-.96 2.3L15 15l-1.04-1.04 5.4-5.4c.1-.1.16-.24.16-.4 0-.3-.27-.53-.6-.53h-1.5c-.33 0-.6.23-.6.53 0 .16.06.3.16.4l-5.4 5.4c-.1.1-.16.24-.16.4 0 .3-.27.53-.6.53h-1.5c-.33 0-.6.23-.6-.53 0-.16.06-.3.16.4l-5.4-5.4c-.1-.1-.16-.24-.16-.4 0-.3-.27-.53-.6-.53H2.5c-.33 0-.6.23-.6.53 0 .16.06.3.16.4L8.5 15l-1.04 1.04-5.4-5.4c-.1-.1-.16-.24-.16-.4 0-.3-.27-.53-.6-.53H2.5c-.33 0-.6.23-.6.53 0 .16.06.3.16.4l5.4 5.4-1.04 1.04-5.4-5.4c-.1-.1-.16-.24-.16-.4 0-.3-.27-.53-.6-.53H2.5z",
        d: "דגן/גלוטן"
    }
];


const AllergenIcon: React.FC<{ index: number }> = ({ index }) => {
    const item = allergenIcons[index] || { p: "", d: "אלרגן לא ידוע" };

    return (
        <div className="flex items-center justify-center p-0" title={item.d}>
            <IconBase className="w-4 h-4 text-gray-700 mx-0.5" strokeWidth={1}>
                <path d={item.p} />
            </IconBase>
        </div>
    );
};

const Badge: React.FC<{ children: React.ReactNode; type: "tags" | "allergen" }> = ({ children, type }) => {
    const color = type === "tags"
        ? "bg-red-100 text-red-800"
        : "bg-green-100 text-green-800";

    return (
        <span className={`flex items-center px-1 py-0 rounded-md text-[9px] font-bold whitespace-nowrap mr-0.5 cursor-pointer ${color}`}>
            {children}
            <CloseIcon />
        </span>
    );
};

const renderBadges = (arr: string[], type: "tags" | "allergen") =>
    arr.map((item, i) => <Badge key={i} type={type}>{item}</Badge>);


const cellRenderers: Record<string, (v: any) => React.ReactNode> = {
    image: (v) => <img src={v} alt="תמונה" className="w-10 h-10 object-cover rounded-md" />,

    price: (v) => <span>{v} ₪</span>,
    מחיר: (v) => <span>{v} ₪</span>,

    tags: (v) => (
        <div className="flex flex-wrap flex-row-reverse items-center justify-end">
            {renderBadges(v, "tags")}
        </div>
    ),

    allergens: (v) => (
        <div className="flex flex-row-reverse items-center justify-end">
            {v.slice(0, 5).map((_: any, i: number) => (
                <AllergenIcon key={i} index={i} />
            ))}
        </div>
    ),

    action: (v) => (
        <div className="flex items-center justify-center space-x-2">
            <EditIcon onClick={() => console.log("Edit", v)} />
            <TrashIcon onClick={() => console.log("Delete", v)} />
        </div>
    )
};


const TableCell: React.FC<{ field: string; value: any }> = ({ field, value }) => {
    const renderer = cellRenderers[field];

    return (
        <td className="py-0 px-2 text-gray-700 text-[11px] font-bold align-middle whitespace-nowrap">
            {renderer ? renderer(value) : value}
        </td>
    );
};


function TableGeneric<T extends Record<string, any>>({ data = [], translations }: TableProps<T>) {
    if (data.length === 0)
        return <div className="p-4 text-center text-gray-500">אין נתונים להצגה</div>;

    let headers = Object.keys(data[0]);
    headers = [...headers.filter((h) => h !== "action"), "action"];

    return (
        <div className="w-full overflow-x-auto" dir="rtl">
            <table className="w-full text-right border-collapse border-none">
                <thead>
                    <tr>
                        {headers.map((h) => (
                            <th
                                key={h}
                                className="py-1 px-2 text-gray-700 font-normal text-xs uppercase tracking-wider bg-transparent"
                                style={{ width: h === "action" ? "60px" : undefined }}
                            >
                                {h === "action" ? "פעולה" : translations[h] || h}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className="bg-transparent hover:bg-gray-100 min-h-10">
                            {headers.map((field) => (
                                <TableCell key={field} field={field} value={field === "action" ? i : row[field]} />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableGeneric;
