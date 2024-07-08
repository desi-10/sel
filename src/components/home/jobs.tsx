import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import digitalmarketing from "/public/digital-marketing.jpg";

const Jobs = () => {
  const data = [
    {
      label: "Digital Marketing",
      image: digitalmarketing.src,
    },
    {
      label: "Digital Marketing",
      image: digitalmarketing.src,
    },
    {
      label: "Digital Marketing",
      image: digitalmarketing.src,
    },
    {
      label: "Digital Marketing",
      image: digitalmarketing.src,
    },
    {
      label: "Digital Marketing",
      image: digitalmarketing.src,
    },
  ];

  return (
    <main>
      <div className="container py-20">
        <h2 className="text-2xl mb-5">Jobs Of The Day</h2>

        <ul className="flex items-center space-x-3 mb-10">
          <Button size="sm" variant={"outline"}>
            Marketing
          </Button>
          <Button size="sm" variant={"outline"}>
            UI/UX
          </Button>
          <Button size="sm" variant={"outline"}>
            Product
          </Button>
          <Button size="sm" variant={"outline"}>
            Backend
          </Button>
        </ul>

        <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                className="shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt="logo"
                    className="group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3>{item.label}</h3>
                  <section className="flex justify-between text-sm">
                    <div className="flex items-center space-x-2  mt-2 text-gray-500">
                      <p>Duration</p>
                      <p>20 hours</p>
                    </div>
                    <p className="py-2 px-4 bg-gray-100 rounded-lg">$33.99</p>
                  </section>
                </div>
              </Card>
            );
          })}
        </section>
        <div className="mt-10 flex justify-center ">
          <Button>View All Jobs</Button>
        </div>
      </div>
    </main>
  );
};

export default Jobs;
