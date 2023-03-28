import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

function about({ setIsOpenOrderList }: any) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div
        className="
      flex justify-center flex-col"
        onClick={() => setIsOpenOrderList(false)}
      >
        <div
          className="flex flex-col justify-start w-5/6
        right-0 left-0 mx-auto max-w-3xl md:min-w-[1024px] dark:shadow-none"
        >
          <h1 className="text-5xl font-bold my-6">About</h1>
          <motion.article
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            layout
            transition={{ duration: 1 }}
            className="flex flex-col justify-center items-center"
          >
            <div className="rounded-lg  overflow-hidden drop-shadow-2xl relative">
              <Image
                src={"/chamara-cristine.jpg"}
                width="200"
                height="200"
                alt={"soul food logo"}
                blurDataURL="/chamara-cristine.jpg"
                placeholder="blur"
              />
            </div>
            <h3 className=" text-2xl font-bold my-6">chamara & christine </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              facere unde nam, praesentium dicta delectus, commodi nihil iusto
              quisquam enim corrupti natus vel a in! Magni doloribus cumque,
              fugiat illo fugit expedita doloremque molestiae laboriosam
              nesciunt modi minus, officiis dolor ipsa impedit necessitatibus at
              suscipit, excepturi quia consectetur quod alias iste eum ab quam?
              Ut blanditiis vel voluptatibus soluta voluptas maxime incidunt,
              ullam quisquam ex quos consequuntur similique, placeat officiis
              sed libero.
            </p>
          </motion.article>
          <div className="mt-2">
            <h4 className=" text-center font-bold text-xl ">Contact </h4>
            <hr className="bg-backGroundDark" />
            <div className="about-links">
              <label htmlFor="address" className="text-sm block font-semibold">
                address :
              </label>
              <address id="address">
                48 Sri Wickrama Rajasinghe Mawatha, Kandy 20000
              </address>
            </div>
            <div className="about-links">
              <label htmlFor="phone" className="text-sm block font-semibold">
                phone :
              </label>
              <a href="tel:+94779717959" className="about-clicks">
                +9477 971 7959
              </a>
              <br />
              <a href="tel:+94766667747" className="about-clicks">
                +9476 666 7747
              </a>
            </div>
            <div className="about-links">
              <label htmlFor="email" className="text-sm font-semibold block">
                email :
              </label>
              <a
                id="email"
                href="mailto:soulfoodkandy@gmail.com"
                className="about-clicks"
              >
                soulfoodkandy@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-2">
            <h4 className=" text-center font-bold text-xl ">Socials </h4>
            <hr className="bg-backGroundDark" />
            <div className="flex justify-center items-center my-2">
              <a
                href="https://www.facebook.com/soulfoodkandy/?ref=page_internal"
                className="mx-2"
                target={"_blank"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-backGroundDark dark:fill-primaryColor"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/chamarabandara0804/"
                className="mx-2"
                target={"_blank"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-backGroundDark dark:fill-primaryColor"
                >
                  <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                </svg>
              </a>
              <a href="mailto:soulfoodkandy@gmail.com" className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-backGroundDark dark:fill-primaryColor"
                >
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="shadow fixed -z-10 opacity-5 top-0 rounded-md min-h-screen min-w-full"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5446972930604!2d80.63386371477506!3d7.292528194736579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36721cdbf3209%3A0x1575ab994a62ba51!2sSoul%20Food!5e0!3m2!1sen!2snl!4v1679292755872!5m2!1sen!2snl"
          className="w-full rounded-md block"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default about;
