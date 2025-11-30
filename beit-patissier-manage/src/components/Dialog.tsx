import React, { useEffect, useRef } from "react";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    scrollable?: boolean;
    className?: string;
}

const FOCUSABLE_SELECTORS =
    'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';

const Dialog = ({ isOpen, onClose, children, title, scrollable = false, className = "" }: DialogProps) => {
    const panelRef = useRef<HTMLDivElement | null>(null);
    const lastActiveElementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;
        lastActiveElementRef.current = document.activeElement as HTMLElement | null;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                onClose();
                return;
            }

            if (e.key === "Tab") {
                const panel = panelRef.current;
                if (!panel) return;

                const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS))
                    .filter((el) => {
                        const style = window.getComputedStyle(el);
                        return style.display !== "none" && style.visibility !== "hidden" && el.offsetParent !== null;
                    });

                if (focusable.length === 0) {
                    e.preventDefault();
                    return;
                }

                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                const active = document.activeElement as HTMLElement | null;

                if (e.shiftKey) {
                    if (active === first || active === panel) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (active === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen) return;
        const t = setTimeout(() => {
            const panel = panelRef.current;
            if (!panel) return;
            const firstFocusable = panel.querySelector<HTMLElement>(FOCUSABLE_SELECTORS);
            if (firstFocusable) firstFocusable.focus();
            else panel.focus();
        }, 10);
        return () => clearTimeout(t);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) return;
        const prev = lastActiveElementRef.current;
        if (prev && typeof prev.focus === "function") {
            setTimeout(() => prev.focus(), 10);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
            aria-hidden={!isOpen ? true : false}
        >
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200"
                onClick={onClose}
            />
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "dialog-title" : undefined}
                ref={panelRef}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
                className={`relative z-10 w-full max-w-2xl max-h-[90vh] transform rounded-2xl bg-white p-6 shadow-2xl transition-all duration-200 animate-fadeIn
          ${scrollable ? "overflow-auto" : "overflow-visible"}
          ${className}`}
            >
                <button
                    onClick={onClose}
                    aria-label="סגור"
                    className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                    ✕
                </button>

                {title && <h2 id="dialog-title" className="text-lg font-semibold mb-3">{title}</h2>}

                <div>{children}</div>
            </div>
        </div>
    );
};

export default Dialog;
