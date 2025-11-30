import React from "react";
import type { CategoryDTO } from "../models/CategoriesDTO";
import ArrowIcon from "../assets/ICONS/arrow.svg";

interface CategoryCardProps {
  category: CategoryDTO;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="flex flex-col w-[313px]">
      {/* תמונה עם רדיוס רק למעלה */}
      <div className="w-[313px] h-[198px] overflow-hidden rounded-t-[12px]">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* שם + אייקון בשורה אחת */}
      <div className="flex justify-between items-center mt-3 px-2">
        {/* שם קטגוריה */}
        <span className="text-sm font-semibold text-gray-800">
          {category.name}
        </span>
           {/*  אייקון */}
        <img
          src={ArrowIcon}
          alt="arrow"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
};

export default CategoryCard;