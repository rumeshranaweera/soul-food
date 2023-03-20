import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useGlobalContext } from "../pages/context";

// export interface menuItems {
//   id: number;
//   imageUrl: string;
//   title: string;
//   ingredient: string[] | number[];
// }

function MenuCard({ item }: any): any {
  const { imageUrl, title, ingredients, price } = item;
  const { orderList, setOrderList }: any = useGlobalContext();
  const addToList = () => {
    if (!orderList.includes(title)) {
      setOrderList([...orderList, title]);
    }
  };

  return (
    <AnimatePresence>
      <div className="relative">
        <motion.article
          layout
          initial={{ y: 40, opacity: 0 }}
          // animate={{ scaleX: openCard ? -1 : 1 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
          className={`open-card bg-white dark:bg-backGroundDark bg-opacity-70 drop-shadow-3xl dark:border-primaryColor dark:border-2 dark:border-opacity-30 dark:drop-shadow-none rounded-md overflow-hidden flex flex-col   p-1  -scale-x-0 h-72 max-w-[264px]`}
        >
          <motion.div
            className="rounded-md h-48 overflow-hidden md:mb-1"
            transition={{ delay: 0.352, duration: 0 }}
          >
            <Image
              src={imageUrl}
              className={`sm:h-auto  w-full `}
              width="250"
              height="250"
              alt={title}
              property="true"
              loading="lazy"
            ></Image>
          </motion.div>
          <motion.div className="ml-2 flex-none ">
            <div className="flex justify-between items-center pt-1">
              <h2 className="text-lg  uppercase sm:mb-1">
                {title} flksajdf;kjsf
              </h2>
              <h2 className="mr-2 text-sm bg-backGroundDark dark:bg-primaryColor dark:bg-opacity-10 bg-opacity-10 px-2 py-1 rounded-md text-center sm:mb-1">
                lkr.{price}
              </h2>
            </div>
            <p className="text-xs">
              {ingredients.map((ingredient: string, inx: number) => {
                return inx === 0 ? (
                  <span key={inx}> {ingredient}</span>
                ) : (
                  <span key={inx}>, {ingredient}</span>
                );
              })}
            </p>
          </motion.div>
          <div
            className="absolute bottom-0 right-0 cursor-pointer text-lg bg-backGroundDark dark:text-primaryColor dark:bg-primaryColor dark:bg-opacity-10 bg-opacity-20 px-2 m-1 rounded-md"
            onClick={addToList}
          >
            {orderList.includes(title) ? "✔" : "+"}
          </div>
        </motion.article>
      </div>
    </AnimatePresence>
  );
}

export default MenuCard;
