import Link from "next/link";
import React from "react";
import { useGlobalContext } from "../pages/context";

export default function OrderdList({
  isOpenOrderList,
  setIsOpenOrderList,
}: any) {
  const { orderList, setOrderList }: any = useGlobalContext();
  if (isOpenOrderList) {
    return (
      <div className="fixed z-40 right-10 w-2/3 h-2/3 mx-auto max-w-xs left-10 top-10 place-content-center mt-24 p-2  bg-primaryColor bg-opacity-70 rounded-md backdrop-blur-sm dark:text-backGroundDark">
        <div
          className="absolute top-2 right-2 bg-backGroundDark rounded-md bg-opacity-10 px-2 cursor-pointer"
          onClick={() => setIsOpenOrderList(false)}
        >
          x
        </div>
        <h3 className="text-center text-3xl font-bold ">orderd list</h3>
        {orderList.length > 0 ? (
          <ol className="">
            {orderList?.map((item: string, inx: number) => {
              return (
                <li
                  key={item}
                  className={`flex justify-between mx-1 font-bold capitalize pl-2 leading-7 duration-500 mt-1 ${
                    inx % 2 === 0
                      ? "bg-backGroundDark bg-opacity-10 rounded-md"
                      : null
                  }`}
                >
                  <p>{item}</p>
                  <span
                    className="bg-backGroundDark
                bg-opacity-10 px-2 rounded-md cursor-pointer"
                    onClick={() => {
                      setOrderList(
                        orderList.filter((food: string) => food !== item)
                      );
                    }}
                  >
                    -
                  </span>
                </li>
              );
            })}
          </ol>
        ) : (
          <h3 className="text-center my-[inherit] text-2xl font-semibold ">
            nothing <br />{" "}
            <span onClick={() => setIsOpenOrderList(false)} className=" m-2">
              <Link
                href={"/menu"}
                className="text-sm bg-backGroundDark bg-opacity-10 p-2 rounded-md"
              >
                open menu
              </Link>
            </span>
          </h3>
        )}
      </div>
    );
  }
}
