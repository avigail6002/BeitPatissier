import React, { useState, useEffect, useRef } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  multi?: boolean;
  icon?: React.ReactNode;
  value?: string | string[];
  onChange?: (val: string | string[]) => void;
  placeholder?: string;
}

export default function Select({
  label,
  options,
  multi = false,
  icon,
  value,
  onChange,
  placeholder = "בחר..."
}: SelectProps) {
  const [open, setOpen] = useState(false);

  // Ref לסגירה בלחיצה מחוץ
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];

  const handleSingleSelect = (val: string) => {
    onChange && onChange(val);
    setOpen(false);
  };

  const handleMultiSelect = (val: string) => {
    let newValues: string[];
    if (selectedValues.includes(val)) {
      newValues = selectedValues.filter((v) => v !== val);
    } else {
      newValues = [...selectedValues, val];
    }
    onChange && onChange(newValues);
  };

  const displayText = () => {
    if (multi) {
      if (!selectedValues.length) return placeholder;
      const labels = options
        .filter((opt) => selectedValues.includes(opt.value))
        .map((opt) => opt.label);
      return labels.join(", ");
    } else {
      const selected = options.find((opt) => opt.value === value);
      return selected?.label || placeholder;
    }
  };

  return (
    <div className="flex flex-col w-full relative" ref={ref}>
      {label && <label className="text-sm font-medium mb-1">{label}</label>}

      {/* תיבת הבחירה */}
      <div
        className="border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 cursor-pointer bg-white"
        onClick={() => setOpen(!open)}
      >
        {icon && <span>{icon}</span>}
        <span className="text-gray-800">{displayText()}</span>
      </div>

      {/* הרשימה הנפתחת */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-1 z-20 max-h-60 overflow-auto">
          {options.map((opt) => (
            <div
              key={opt.value}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() =>
                multi ? handleMultiSelect(opt.value) : handleSingleSelect(opt.value)
              }
            >
              {multi && (
                <input
                  type="checkbox"
                  checked={selectedValues.includes(opt.value)}
                  onChange={() => handleMultiSelect(opt.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              )}
              <span>{opt.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}