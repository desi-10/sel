import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "./ui/button";
import { ArrowBigDown, ArrowDown, ChevronDown, Dot } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 container bg-white">
      <img src="" alt="logo" />
      <div>
        <Menubar className="border-0">
          <MenubarMenu>
            <MenubarTrigger>Home</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>About Us</MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              Jobs <ChevronDown className="w-4 h-4 ml-1" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Item 1</MenubarItem>
              <MenubarItem>Item 2</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Item 3</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              Services <ChevronDown className="w-4 h-4 ml-1" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Item 1</MenubarItem>
              <MenubarItem>Item 2</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Item 3</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              Product <ChevronDown className="w-4 h-4 ml-1" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Item 1</MenubarItem>
              <MenubarItem>Item 2</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Item 3</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              Help Center <ChevronDown className="w-4 h-4 ml-1" />
            </MenubarTrigger>
            <MenubarContent className="p-0">
              <MenubarItem>
                <Dot /> Contact Us
              </MenubarItem>
              <MenubarItem>
                <Dot />
                FAQs
              </MenubarItem>
              <MenubarItem>
                <Dot />
                Privacy Privacy
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="link">Register</Button>
        <Button className="bg-black text-white px-4 py-2 rounded-lg">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
