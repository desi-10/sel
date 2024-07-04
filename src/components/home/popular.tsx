import React from "react";
import { CarouselSize } from "./carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

import image1 from "/public/pexels-pixabay-60504.jpg";
import image2 from "/public/pexels-cottonbro-5427552.jpg";
import image3 from "/public/pexels-goumbik-574069.jpg";
import image4 from "/public/pexels-pixabay-270572.jpg";
import Image from "next/image";

const Popular = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      label: "Cybersecurity",
      image: image1,
    },
    {
      label: "Art",
      image: image2,
    },
    {
      label: "Coding",
      image: image3,
    },
    {
      label: "Music",
      image: image4,
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="container py-10">
      <motion.h2
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl mb-10"
      >
        Popular Category
      </motion.h2>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className=""
      >
        <Carousel responsive={responsive}>
          {data.map((item, index) => {
            return (
              <motion.div
                variants={cardVariants}
                key={index}
                className="relative inset-0 w-[400px] h-96 overflow-hidden rounded-lg shadow-lg "
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 h-full w-full"
                  priority
                />
                <p className="absolute bottom-5 left-5 text-3xl text-white z-20">
                  {item.label}
                </p>
                <div className="absolute bottom-0  h-full w-full bg-gradient-to-b from-black/0 to-black z-10"></div>
              </motion.div>
            );
          })}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Popular;
