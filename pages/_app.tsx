import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Appcontext from "./context";

import OrderdList from "../components/OrderdList";
import { useEffect, useRef, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpenOrderList, setIsOpenOrderList] = useState<Boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const preventScrolling = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      if (isOpenOrderList) {
        currentContainer.addEventListener("wheel", preventScrolling);
      }
      return () =>
        currentContainer.removeEventListener("wheel", preventScrolling);
    }
  }, [isOpenOrderList]);
  return (
    <Appcontext>
      <div ref={containerRef}>
        <Head>
          <title>Soul Food</title>
          <meta
            name="description"
            content="Vegetarian and vegan food – Sri Lankan, Western, fusion"
          />

          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="fixed -z-50 left-0 top-3 w-72 h-72 dark:hidden bg-backGroundDark  opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animate-delay-2s"></div>
        <div className="fixed -z-50 bottom-7 left-10 w-72 h-72 dark:hidden bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animate-delay-4s"></div>
        <div className="fixed -z-50 right-0 top-28 w-72 h-72 dark:hidden bg-primaryColor opacity-70 rounded-full mix-blend-multiply filter blur-3xl animate-blob animate-delay-8s"></div>
        <Navbar setIsOpenOrderList={setIsOpenOrderList}></Navbar>
        <Component
          {...pageProps}
          isOpenOrderList={isOpenOrderList}
          setIsOpenOrderList={setIsOpenOrderList}
        />
        <OrderdList
          isOpenOrderList={isOpenOrderList}
          setIsOpenOrderList={setIsOpenOrderList}
        />
        <div
          className="bg-backGroundDark bg-opacity-80 dark:bg-primaryColor p-1 text-3xl rounded-md fixed z-30 bottom-3 right-3 cursor-pointer"
          onClick={() => setIsOpenOrderList(!isOpenOrderList)}
        >
          🍜
        </div>

        <Footer />
      </div>
    </Appcontext>
  );
}
