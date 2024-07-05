"use client";
import ComboBox from "@/components/home/combox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { House, LocateIcon, MapPin, Search } from "lucide-react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="">
      <div className="w-[700px] mx-auto">
        <section className="space-y-5">
          <h1 className="text-white text-center text-4xl mb-5">
            The <span className="text-primary-color">#1 Platform</span> for{" "}
            <br />
            Find Services, Products or Jobs
          </h1>
          <p className="text-white text-center text-sm">
            Are you in head a service or Job? Experienced freelancers available
            to give you the best services for your project
          </p>
        </section>

        <section className="w-full flex items-center bg-white p-3 rounded-lg mt-10">
          <div className="border-r flex items-center">
            <House />
            <ComboBox />
          </div>
          <div className="border-r pl-3 flex items-center">
            <MapPin />
            <ComboBox />
          </div>
          <Input className="border-0" placeholder="Your keyword..." />
          <Button className="flex items-center space-x-2 px-3">
            <Search className="w-4 h-4" />
            <p>Search</p>
          </Button>
        </section>
      </div>

      <div className="flex justify-center items-center space-x-5 text-white mt-6">
        <p>Popular services:</p>
        <ul className="flex items-center space-x-3">
          <li className="underline">React JS</li>
          <li className="underline">Node JS</li>
          <li className="underline">Next JS</li>
        </ul>
      </div>

      <section className="  text-white flex justify-center items-center mt-16 space-x-20 font-bold">
        <div>
          <p className="text-3xl font-bold">
            <CountUp start={0} end={265} className="font-bold" duration={5} />
            <span className="font-bold">K+</span>
          </p>
          <p className="text-primary-color">Daily Jobs Passed</p>
        </div>
        <div>
          <p className="text-3xl">
            <CountUp start={0} end={17} className="font-bold" duration={5} />
            <span className="font-bold">K+</span>
          </p>
          <p className="text-primary-color">Recruites</p>
        </div>
        <div>
          <p className="text-3xl">
            <CountUp start={0} end={15} className="font-bold" duration={5} />
            <span className="font-bold">K+</span>
          </p>
          <p className="text-primary-color">Freelancers</p>
        </div>
        <div>
          <p className="text-3xl">
            <CountUp start={0} end={28} className="font-bold" duration={5} />
            <span className="font-bold">K+</span>
          </p>
          <p className="text-yellow-500">Blog Tips</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
