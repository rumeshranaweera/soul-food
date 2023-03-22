import Head from "next/head";
import { type } from "os";
import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuCard from "../components/MenuCard";

type item = {
  imageUrl: string;
  title: string;
  ingredients: string[];
  price: number;
  category: string;
};

export const itemsList: item[] = [
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/8c/d3/a2/rice-noodle-bowl-and.jpg",
    title: "papaya",
    ingredients: ["rice", "potato"],
    price: 1200,
    category: "drink",
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/9b/11/ef/photo1jpg.jpg",
    title: "avacado",
    ingredients: [
      "rice",
      "potato",
      "rice",
      "potato jfdslkfja;dskfj",
      "rice",
      "potato",
      "rice",
      "potato",
    ],
    category: "salad",
    price: 1200,
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/01/08/18/photo0jpg.jpg",
    title: "wraps",
    ingredients: ["rice", "potato"],
    category: "bowels",
    price: 1200,
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/28/0f/19/2c/soul-food.jpg",
    title: "rice",
    ingredients: ["rice", "potato"],
    category: "bergers and wraps",
    price: 1200,
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/27/d1/42/b5/soul-food.jpg",
    title: "rice",
    ingredients: ["rice", "potato"],
    category: "pasta",
    price: 1300,
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/06/b1/5c/caption.jpg",
    title: "rice",
    ingredients: ["rice", "potato"],
    category: "dessert",
    price: 1200,
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/12/9c/bc/caption.jpg",
    title: "rice",
    ingredients: ["rice", "potato"],
    category: "dessert",
    price: 1200,
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-o/1b/15/0e/d5/photo0jpg.jpg",
    title: "rice",
    ingredients: ["rice", "potato"],
    category: "dessert",
    price: 1200,
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/30/4f/bb/mango-juice.jpg",
    title: "rice",
    ingredients: ["rice", "potato"],
    category: "dessert",
    price: 1200,
  },
];

const allCategories = [
  "all",
  ...new Set(itemsList.map((item) => item.category)),
];
function menu({ setIsOpenOrderList }: any) {
  const [menuItems, setMenuItems] = useState(itemsList);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(itemsList);
      return;
    }
    const newItems = itemsList.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <div
        className="
        flex justify-center"
        onClick={() => setIsOpenOrderList(false)}
      >
        <div
          className="flex flex-col justify-start w-5/6
           mx-auto max-w-5xl lg:min-w-[1024px]"
        >
          <h1 className="text-5xl font-bold my-6">Menu</h1>
          <Categories categories={categories} filterItems={filterItems} />

          <div className="flex flex-wrap justify-center items-start gap-2">
            {menuItems.map((item, index) => {
              return <MenuCard key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default menu;
