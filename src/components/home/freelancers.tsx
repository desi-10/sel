import React from "react";
import { CarouselSize } from "./carousel";

const Freelancers = () => {
  return (
    <div>
      <div className="container py-10">
        <h2 className="text-4xl mb-10">Top Freelancers</h2>

        <div className="">
          <CarouselSize />
        </div>
      </div>
    </div>
  );
};

export default Freelancers;
