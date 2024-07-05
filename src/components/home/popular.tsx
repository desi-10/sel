import React from "react";
import CardsComponent from "./cardscomponent";

import image1 from "/public/pexels-pixabay-60504.jpg";
import image2 from "/public/pexels-cottonbro-5427552.jpg";
import image3 from "/public/pexels-goumbik-574069.jpg";
import image4 from "/public/pexels-pixabay-270572.jpg";

const Popular = () => {
  const data = [
    {
      label: "Cybersecurity",
      image: image1.src,
    },
    {
      label: "Art",
      image: image2.src,
    },
    {
      label: "Coding",
      image: image3.src,
    },
    {
      label: "Music",
      image: image4.src,
    },
  ];
  return (
    <div className="container py-20">
      <CardsComponent title="Popular Category" data={data} />
    </div>
  );
};

export default Popular;
