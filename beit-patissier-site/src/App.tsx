// src/App.tsx - קוד מושלם

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ייבוא רכיבי ה-Navbar והדפים
import { Navbar } from './components/Navbar'; 
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { Products } from './pages/Products'; 
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Kashrut } from './pages/Kashrut';
import { Profile } from './pages/Profile';

// ייבוא קובץ העיצוב (אם קיים)
import './App.css'; 

export const App = () => {
  return (
    <Router>
      <Navbar /> 
      {/* *** התיקון: הוספת Padding-Top *** */}
      <main style={{ paddingTop: '65px' }}> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kashrut" element={<Kashrut />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App