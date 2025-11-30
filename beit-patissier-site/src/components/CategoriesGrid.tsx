// src/pages/CategoriesGrid.tsx
import React from "react";
import { fakeCategories } from "../mock/Categories";
import CategoryCard from "./CategoriesCard"

const CategoriesGrid: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-16 mb-16 max-w-6xl">
        {/* כאן את יכולה לשים כותרת או תפריט למעלה אם יש בפיגמה */}

        {/* הגריד של הקופסאות */}
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {fakeCategories.map((category) => (
            <CategoryCard key={category.categoryId} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;