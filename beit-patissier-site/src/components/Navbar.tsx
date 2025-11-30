// src/components/Navbar.tsx

import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.css';

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
                    {...(link.path === '/' && { end: true })} 
                > 
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
};