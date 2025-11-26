import Input from "../components/Input";
import React, { useState } from "react";
import Select from "../components/Select";
import ProductEditTab from "./EditProduct";

export default function AddProduct() {


//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");
//   const [tags, setTags] = useState<string[]>([]);

//   const categories = [
//     { label: "גלוטן", value: "גלוטן" },
//     { label: "Clothing", value: "clothing" },
//     { label: "Books", value: "books" },
//   ];
//   const tagOptions = [
//     { label: "New", value: "new" },
//     { label: "Sale", value: "sale" },
//     { label: "Limited", value: "limited" },
//   ];

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <ProductEditTab />
    </div>
    {/* <div className="p-6 max-w-md mx-auto">

      <Input
        label="שם מוצר"
        placeholder="הכנס שם מוצר"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       <div style={{ padding: "20px", maxWidth: "400px" }}> */}

      {/* SELECT לבחירה יחידה */}
      {/* <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Product</h2> */}

      {/* Single select עם אייקון */}
      {/* <Select
        label="Category"
        options={categories}
        value={category}
        onChange={(val) => typeof val === "string" && setCategory(val)}
        multi={false}
      />

      <div className="my-4"></div> */}

      {/* Multi select (checkbox) */}
        {/* <Select
        label="Tags"
        options={tagOptions}
        value={tags}
        onChange={(val) => Array.isArray(val) && setTags(val)}
        multi={true}
        /> */}

      {/* </div>
      </div>
    </div> */}
    </>
  )
}


