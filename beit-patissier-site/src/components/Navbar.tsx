// src/components/Navbar.tsx

import React from 'react';
import { NavLink } from 'react-router-dom'; 

const navLinks = [
    { path: '/', label: 'ראשי' }, 
    { path: '/events', label: 'אירועים' },
    { path: '/products', label: 'מוצרים' },
    { path: '/about', label: 'אודות' },
    { path: '/blog', label: 'בלוג' },
    { path: '/kashrut', label: 'כשרות' },
    { path: '/profile', label: 'שייקים אישי' }, 
];

export const Navbar = () => {
    const navClasses = 'fixed top-0 w-full z-10 flex flex-row-reverse justify-center items-center bg-white shadow-md py-5';
    const baseLinkClasses = 'text-base mx-[15px] hover:text-gray-600 transition duration-150';

    return (
        <nav className={navClasses}> 
            {navLinks.map((link) => (
                <NavLink 
                    key={link.path} 
                    to={link.path} 
                    className={({ isActive }) => 
                        `${baseLinkClasses} ${isActive 
                            ? '!font-bold !text-gray-800' 
                            : 'font-normal !text-gray-800'
                        }`
                    }
                    {...(link.path === '/' && { end: true })} 
                > 
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
};