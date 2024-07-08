import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

const BackHome = () => {
  return (
    <div>
      <Link href="/">
        <Button variant="link" className="flex items-center space-x-3 mb-5">
          <ArrowLeft className="w-5 h-5" /> <span>Home</span>
        </Button>
      </Link>
    </div>
  );
};

export default BackHome;
