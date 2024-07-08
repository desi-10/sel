"use client";
import bg from "/public/digital-marketing.jpg";
import bg1 from "/public/pexels-pixabay-60504.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BackgroundImages = () => {
  const [index, setIndex] = useState(0);
  const images = [bg.src, bg1.src];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 50000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
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
  );
};

export default BackgroundImages;
