"use client";
import * as React from "react";
import image1 from "/public/pexels-pixabay-60504.jpg";
import image2 from "/public/pexels-cottonbro-5427552.jpg";
import image3 from "/public/pexels-goumbik-574069.jpg";
import image4 from "/public/pexels-pixabay-270572.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { easeIn, motion, stagger } from "framer-motion";
export function CarouselSize() {
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
        easeIn: easeIn,
      },
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

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 ">
              <motion.div variants={cardVariants}>
                <Card className="w-full relative">
                  <CardContent className="h-56">
                    <div className="w-full absolute inset-0">
                      <img src={data.image.src} alt={data.label} />
                    </div>
                    <h3>{data.label}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
}
