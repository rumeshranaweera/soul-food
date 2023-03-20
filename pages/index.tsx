import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { itemsList } from "./menu";
import MenuCard from "../components/MenuCard";
import { useGlobalContext } from "./context";

const reviews = [
  {
    title: "SOOO GOOD",
    url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e7/99/default-avatar-2020-57.jpg",
    message:
      "This place is delicious. We tried the jackfruit burger and the almond basil pesto pasta and both were absolutely AMAZING. Even though we are not vegan I would go back in a heartbeat, they have something for everyone! HIGHLY RECOMMEND - you won’t regret it.",
    author: "Tessa M",
  },
  {
    title: "Best food in Kandy",
    url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/11/default-avatar-2020-23.jpg",
    message:
      "By far the best vegan food I had in Kandy. Very nice people working there, the food sometimes takes a bit of time but it’s really worth it. Looking forward to come here again next time I’m here!",
    author: "Ivok_k97",
  },
  {
    title: "Delicious jackfruit wrap and great staff and music",
    url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/94/fe/d8/catalina980.jpg",
    message:
      "We had dinner here after a very hectic day. It was lovely to eat some delicious food and listen to some relaxing soul type music. We had pumpkin soup (yummy!), followed by jackfruit wrap and burger and nice sweet potato fries.",
    author: "Catalina980",
  },
  {
    title: "Vegan food at its best",
    url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e3/1f/default-avatar-2020-46.jpg",
    message:
      "antastic vegan food in a small and very cool place, just behind the shopping centre. Great vibe chilled music and the staff were super freindly.",
    author: "Markbansko",
  },
  {
    title: "Perfect for vegetarians!",
    url: "https://media-cdn.tripadvisor.com/media/photo-l/07/00/24/69/yelena-s.jpg",
    message:
      "Lovely atmosphere and friendly stuff. Our order was missed, but we got an extra drink and a big discount on food, which was delicious! Soup and potato wedges were extra tasty! For sure will come again.",
    author: "Yelena S",
  },
  {
    title: "Perfect!!!",
    url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e8/5b/default-avatar-2020-61.jpg",
    message:
      "Soul crew are gentlemans, so nice and polite. We ordered vege spagetti and House burger…d-e-l-l-i-c-i-o-u-s!!!!😍 Plus good music! Thank you! - couple from Prague Czech Republic",
    author: "Eva K",
  },
  {
    title: "Lovely Restaurant with delicious food and nice staff!",
    url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e4/ca/default-avatar-2020-51.jpg",
    message:
      "The food was really really delicious. The stuff very kind. Highly recommend it! It is a cozy decorated restaurant with a nice athmosphere.",
    author: "ManuelT2148",
  },
];

const Images = () => {
  return (
    <div>
      <div className="img-3d absolute top-28 right-3 md:top-28 md:right-28 w-36">
        <Image
          src={
            "https://media-cdn.tripadvisor.com/media/photo-o/1b/15/0e/d5/photo0jpg.jpg"
          }
          width="300"
          height="500"
          alt={""}
          className="img-right relative "
        />
      </div>
      <div className="img-3d absolute top-56 right-10 md:top-28 md:right-28 w-36">
        <Image
          src={
            "https://media-cdn.tripadvisor.com/media/photo-o/1a/9b/11/ee/photo0jpg.jpg"
          }
          width="300"
          height="500"
          alt={""}
          className="img-right relative "
        />
      </div>
      <div className="img-3d absolute top-28 left-3 md:top-28 md:right-28 w-36">
        <Image
          src={
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/12/9c/bc/caption.jpg"
          }
          width="300"
          height="500"
          alt={""}
          className="img-left relative "
        />
      </div>
      <div className="img-3d absolute top-56 left-10 md:top-28 md:right-28 w-36">
        <Image
          src={
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/28/0f/19/2c/soul-food.jpg"
          }
          width="300"
          height="500"
          alt={""}
          className="img-left relative "
        />
      </div>
    </div>
  );
};

const images = [
  "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/12/9c/bc/caption.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/9b/11/ef/photo1jpg.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/01/08/18/photo0jpg.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-m/1280/28/0f/19/2c/soul-food.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-m/1280/27/d1/42/b5/soul-food.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/64/70/ff/caption.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/06/b1/5c/caption.jpg",
];

const variants = {
  initial: (direction: any) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: any) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setDirection(1);
      if (index === images.length - 1) {
        setIndex(0);
        return;
      }
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [index, direction]);
  return (
    <div className="container my-2">
      <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            src={images[index]}
            alt="slides"
            className="slides"
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        {/* <button className="prevButton" onClick={prevStep}>
          ◀
        </button>
        <button className="nextButton" onClick={nextStep}>
          ▶
        </button> */}
      </div>
    </div>
  );
}
export default function Home({ setIsOpenOrderList }: any) {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * reviews.length - 2)
  );
  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviews]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <main
      className="flex flex-col justify-center items-center w-5/6
           mx-auto max-w-4xl"
      onClick={() => setIsOpenOrderList(false)}
    >
      <div>
        <motion.h1
          className="text-3xl text-opacity-95 relative font-bold text-center mt-6 sm:mb-3"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Vegetarian and vegan food – Sri Lankan, Western, fusion
        </motion.h1>
        <ImageSlider />
        <div className="mt-2">
          <div className="flex justify-between my-2">
            <h2 className="text-3xl font-bold">Favorites</h2>
            <Link href="/menu" className="text-xl font-bold">
              Menu <ChevronDownIcon className="inline h-6 w-6 -rotate-90" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-start gap-2">
            {itemsList.slice(0, 6).map((item, index) => {
              return <MenuCard key={index} item={item} />;
            })}
          </div>
        </div>
        <div className="reviews my-2">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Reviews</h2>
            <a
              href="https://www.tripadvisor.com/UserReviewEdit-g304138-d19839180-Soul_Food-Kandy_Kandy_District_Central_Province.html"
              target={"_blank"}
              className="text-xl font-bold"
            >
              Write a Review
              <ChevronDownIcon className="inline h-6 w-6 -rotate-90" />
            </a>
          </div>
          <div className="overflow-hidden w-screen max-w-4xl flex relative justify-center mx-auto h-96">
            {reviews.map((review, Reviewindex) => {
              const { title, message, author, url } = review;
              let position = "hiddenSlide";
              if (Reviewindex === index) {
                position = "activeSlide";
              }
              if (
                Reviewindex === index + 1 ||
                (index === reviews.length - 1 && Reviewindex === 0)
              ) {
                position = "nextSlide";
              }
              if (
                Reviewindex === index - 1 ||
                (index === 0 && Reviewindex === reviews.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article
                  key={Reviewindex}
                  className={`absolute h-full max-w-[264px] bg-white bg-opacity-90 backdrop-blur-sm dark:bg-backGroundDark drop-shadow-3xl dark:border-primaryColor dark:border-2 dark:border-opacity-30 dark:drop-shadow-none rounded-md  flex flex-col items-center  p-1 text-center ${position} duration-200`}
                >
                  <img
                    src={url}
                    alt={title}
                    loading="lazy"
                    width={72}
                    height={72}
                    className="rounded-full object-cover"
                  />
                  <h5 className=" text-sm bg-backGroundDark dark:bg-primaryColor dark:bg-opacity-10 bg-opacity-10 px-2 py-1 rounded-md text-center sm:mb-1 mt-1">
                    {author}
                  </h5>
                  <h4 className="text-lg border-b-2 border-b-primaryColor">
                    {title}
                  </h4>
                  <p className=" text-sm">{message}</p>
                </article>
              );
            })}
            <div
              className=" absolute z-10 top-0 bottom-0 left-1 flex items-center"
              onClick={() => setIndex(index - 1)}
            >
              <button className="text-3xl bg-primaryColor bg-opacity-60 dark:text-backGroundDark rounded-full px-2">
                {"<"}
              </button>
            </div>
            <div
              className="absolute z-10 top-0 bottom-0 right-1 flex items-center "
              onClick={() => setIndex(index + 1)}
            >
              <button className="text-3xl bg-primaryColor bg-opacity-60 dark:text-backGroundDark rounded-full px-2">
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5446972930604!2d80.63386371477506!3d7.292528194736579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36721cdbf3209%3A0x1575ab994a62ba51!2sSoul%20Food!5e0!3m2!1sen!2snl!4v1679292755872!5m2!1sen!2snl"
        className="w-full rounded-md"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </main>
  );
}
