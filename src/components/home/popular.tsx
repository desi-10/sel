import React from "react";
import { CarouselSize } from "./carousel";

const Popular = () => {
  return (
    <div className="container py-10">
      <h2 className="text-4xl mb-10">Popular Category</h2>

      <div className="">
        <CarouselSize />
      </div>
    </div>
  );
};

export default Popular;
