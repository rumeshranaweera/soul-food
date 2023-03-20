import React from "react";

function Footer() {
  return (
    <footer className="relative -z-20 bottom-0 right-0 mx-auto w-5/6 bg-primaryColor dark:bg-backGroundDark rounded-tr-lg mt-2 flex justify-between item-center px-1">
      <p className="textbg">
        &copy; soul food {new Date().getFullYear().toString()}
      </p>
      <p className="text-[10px]">
        everything by{" "}
        <a
          href="https://www.instagram.com/lx_l_lx/"
          className="cursor-pointer"
          target={"_blank"}
        >
          lxllx
        </a>
      </p>
    </footer>
  );
}

export default Footer;
