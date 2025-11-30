// src/components/Navbar.tsx

import React from 'react';
import { NavLink } from 'react-router-dom'; // *** שינוי: NavLink במקום Link לאינדיקציה פעילה ***
import './Navbar.css';

// רשימת הקישורים: 
// הסדר הוא מימין לשמאל: ראשי (מימין) > אירועים > ... > שייקים אישי (משמאל)
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
    return (
        <nav className="navbar-container"> 
            {navLinks.map((link) => (
                <NavLink 
                    key={link.path} 
                    to={link.path} 
                    className="navbar-link"
                    // *** התיקון הקריטי לקישור הראשי (Home): ***
                    // הוספת end: true רק לנתיב הבסיס ('/'). זה מבטיח ש'ראשי' יסומן כפעיל
                    // רק בנתיב המדויק '/' ולא בכל נתיב אחר (כמו /events).
                    {...(link.path === '/' && { end: true })} 
                > 
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
};