import React from "react";
import { CarouselSize } from "./carousel";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const Jobs = () => {
  return (
    <main>
      <div className="container py-10">
        <h2 className="text-4xl mb-5">Jobs of the day</h2>

        <ul className="flex items-center space-x-3 mb-10">
          <Button variant={"outline"}>Marketing</Button>
          <Button variant={"outline"}>UI/UX</Button>
          <Button variant={"outline"}>Product</Button>
          <Button variant={"outline"}>Backend</Button>
        </ul>

        <section className="grid md:grid-cols-4 lg:grid-cols-5 gap-5">
          <Card>
            <img src="" alt="logo" />
            <div>
              <h3>Job Title</h3>
              <div className="flex items-center space-x-5">
                <p>Duration</p>
                <p>20 hours</p>
              </div>
            </div>
          </Card>
          <Card>
            <img src="" alt="logo" />
            <div>
              <h3>Job Title</h3>
              <div className="flex items-center space-x-5">
                <p>Duration</p>
                <p>20 hours</p>
              </div>
            </div>
          </Card>
          <Card>
            <img src="" alt="logo" />
            <div>
              <h3>Job Title</h3>
              <div className="flex items-center space-x-5">
                <p>Duration</p>
                <p>20 hours</p>
              </div>
            </div>
          </Card>
          <Card>
            <img src="" alt="logo" />
            <div>
              <h3>Job Title</h3>
              <div className="flex items-center space-x-5">
                <p>Duration</p>
                <p>20 hours</p>
              </div>
            </div>
          </Card>
          <Card>
            <img src="" alt="logo" />
            <div>
              <h3>Job Title</h3>
              <div className="flex items-center space-x-5">
                <p>Duration</p>
                <p>20 hours</p>
              </div>
            </div>
          </Card>
          <Card>
            <img src="" alt="logo" />
            <div>
              <h3>Job Title</h3>
              <div className="flex items-center space-x-5">
                <p>Duration</p>
                <p>20 hours</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Jobs;
