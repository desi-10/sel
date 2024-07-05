import { Flower } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center border-2 rounded-full p-4 border-amber-300">
      <Flower className="w-10 h-10" />
    </div>
  );
};

export default Logo;
