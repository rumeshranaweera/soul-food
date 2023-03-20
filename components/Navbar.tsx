import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [fullNav, setFullNav] = useState(false);
  const [initialPosition, setInitialPosition] = useState("-top-60");
  const cahngeColor = setTimeout(() => {
    setInitialPosition("-top-36");
  }, 700);
  return (
    <nav
      className={` z-10 fixed flex flex-col justify-center items-center bg-primaryColor dark:bg-backGroundDark dark:bg-opacity-80  bg-opacity-80 rounded-b-lg w-5/6 duration-500 drop-shadow-lg backdrop-blur-sm
    right-0 left-0 mx-auto  ${initialPosition} ${
        fullNav ? "translate-y-36" : ""
      }`}
    >
      <div className={""}>
        <ul
          onClick={() => {
            setFullNav(false);
          }}
          className="text-lg font-medium"
        >
          <Link href="/" aria-label="go to homepage">
            <li className="link">Home</li>
          </Link>
          <Link href="/menu">
            <li className="link">Menu</li>
          </Link>
          <Link href="/about">
            <li className="link">About</li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-between items-center w-full p-1 content-between mt-2">
        <div>
          <Link
            href={"/"}
            onClick={() => {
              setFullNav(false);
            }}
          >
            <Image
              src={"/SoulFoodLogo.png"}
              width="150"
              height="70"
              alt={"soul food logo"}
            />
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="text-lg font-medium flex">
            <Link href="/">
              <li className="link border-none">Home</li>
            </Link>
            <Link href="/menu">
              <li className="link border-none">Menu</li>
            </Link>
            <Link href="/about">
              <li className="link border-none">About</li>
            </Link>
          </ul>
        </div>
        <div
          className={`flex justify-end p-1 m-1 sm:hidden duration-500  h-8 w-8 dark:text-primaryColor dark:bg-primaryColor dark:bg-opacity-10 text-backGroundDark bg-backGroundDark bg-opacity-10 rounded-md`}
          onClick={() => setFullNav(!fullNav)}
        >
          <ChevronDownIcon
            className={` duration-500 delay-300 ${
              fullNav ? "-rotate-180" : null
            } `}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
