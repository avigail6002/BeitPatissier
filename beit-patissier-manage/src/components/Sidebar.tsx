import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
    path: string;
    label: string;
}


const Sidebar: React.FC = () => {
    const location = useLocation();
    
    const menuItems: MenuItem[] = [
        { path: '/מוצרים', label: 'מוצרים' },
        { path: '/הזמנות', label: 'הזמנות' }
        
    ];

    return (
        <aside className="w-40 bg-[#a8a8a8] fixed z-50 h-full text-black flex flex-col pt-5 px-5">
      {/* לוגו */}
      <div className="mb-10 flex justify-center">
        <img src="/logo.png" alt="Logo" className="h-14" />
      </div>

      <nav className="flex flex-col gap-6 items-end pt-32">
        {menuItems.map((item) => {
          const isActive = decodeURI(location.pathname) === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`text-black text-right w-full text-xs transition focus-visible:outline-none ${isActive
                  ? "underline underline-offset-8 decoration-1 decoration-[#454545] font-bold"
                  : ""
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;