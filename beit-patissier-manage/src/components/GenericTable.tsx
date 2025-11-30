import React from "react";

type TableProps<T> = {
    data: T[];
    children?: (row: T, index: number) => React.ReactNode;
};

function TableProduct<T>({ data = [], children }: TableProps<T>) {
    if (data.length === 0) {
        return (
            <div className="p-4 text-center text-gray-500">
                אין נתונים להצגה
            </div>
        );
    }

    const headers = Object.keys(data[0] as object);

    return (
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow" dir="rtl">
            <table className="w-full border-collapse text-right">
                <thead className="bg-gray-50 border-b">
                    <tr>
                        {headers.map((h) => (
                            <th key={h} className="p-3 font-semibold text-gray-700">
                                {h}
                            </th>
                        ))}
                        {children && <th className="p-3 font-semibold text-gray-700">פעולות</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50 transition">
                            {headers.map((h) => (
                                <td key={h} className="p-3 text-gray-800">
                                    {(row as any)[h]}
                                </td>
                            ))}
                            {children && <td className="p-3">{children(row, index)}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableProduct;
