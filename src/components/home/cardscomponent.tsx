"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
  title: string;
  data: data[];
};

type data = {
  label: string;
  image: string;
};

const CardsComponent = ({ data, title }: CardProps) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl mb-10"
      >
        {title}
      </motion.h2>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className=""
      >
        <Carousel responsive={responsive}>
          {data?.map((item, index) => {
            return (
              <motion.div
                variants={cardVariants}
                key={index}
                className="relative inset-0  w-[80%] h-72 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={300}
                  height={300}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                  priority
                />
                <p className="absolute bottom-5 left-5  text-white z-20">
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

export default CardsComponent;
