// src/mock/categories.ts
import type { CategoryDTO } from "../models/CategoriesDTO";

// אפשר להחליף לנתיבים אמיתיים של תמונות מה-assets שלך
import MacaronImage from "../assets/images/CategoryIMG.png";

export const fakeCategories: CategoryDTO[] = [
  { categoryId: 1, name: "מגש אירוח", imageUrl: MacaronImage },
  { categoryId: 2, name: "פירות", imageUrl: MacaronImage },
  { categoryId: 3, name: "שייקים", imageUrl: MacaronImage },
  { categoryId: 4, name: "מנות ראשונות", imageUrl: MacaronImage },
  { categoryId: 5, name: "קינוחים", imageUrl: MacaronImage },
  { categoryId: 6, name: "מנות אחרונות", imageUrl: MacaronImage },
];
