"use client";
import Freelancers from "@/components/home/freelancers";
import Hero from "@/components/home/hero";
import Jobs from "@/components/home/jobs";
import Popular from "@/components/home/popular";
import Image from "next/image";
import bg from "/public/digital-marketing.jpg";
import bg1 from "/public/pexels-pixabay-60504.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [index, setIndex] = useState(0);
  const images = [bg.src, bg1.src];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 50000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="">
      <div className="relative h-screen flex justify-center items-center bg-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-10 flex justify-center items-center">
          <Hero />
        </div>
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence>
            <motion.img
              key={images[index]}
              src={images[index]}
              initial={{ x: "100%" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
              exit={{
                x: "-100%",
              }}
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black/85"></div>
      </div>
      <div className="bg-white">
        <Popular />
      </div>
      <div className="bg-amber-300">
        <Freelancers />
      </div>
      <div className="bg-white">
        <Jobs />
      </div>
    </main>
  );
}
