import React, { useState } from "react";

const Categories = ({ categories, filterItems }: any) => {
  const [activeCategory, setActiveCategroy] = useState("all");
  console.log(activeCategory);
  return (
    <div className="flex justify-center mb-5 flex-wrap">
      {categories.map((category: string, index: number) => {
        return (
          <button
            type="button"
            className={`bg-backGroundDark dark:text-primaryColor dark:bg-primaryColor dark:bg-opacity-10 bg-opacity-5 hover:bg-opacity-20 text-backGroundDark duration-300 rounded-md m-1 text-base capitalize my-1 p-2 ${
              category === activeCategory
                ? "bg-opacity-20 dark:bg-opacity-25"
                : null
            }`}
            key={index}
            onClick={() => {
              filterItems(category);
              setActiveCategroy(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
