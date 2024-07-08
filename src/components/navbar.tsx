"use client";
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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const navData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Jobs",
      children: [
        {
          label: "Item 1",
          href: "#",
        },
        {
          label: "Item 2",
          href: "#",
        },
      ],
    },
    {
      label: "Services",
      children: [
        {
          label: "Item 1",
          href: "/services",
        },
        {
          label: "Item 2",
          href: "#",
        },
      ],
    },
    {
      label: "Products",
      children: [
        {
          label: "Item 1",
          href: "#",
        },
        {
          label: "Item 2",
          href: "#",
        },
        {
          label: "Item 3",
          href: "#",
        },
      ],
    },
    {
      label: "Help Center",
      children: [
        {
          label: "Item 1",
          href: "#",
        },
        {
          label: "Item 2",
          href: "#",
        },
      ],
    },
  ];
  return (
    <nav className="flex justify-between items-center py-5 container bg-white">
      <img src="" alt="logo" />

      <div className="flex items-center">
        {navData.map(({ label, href, children }) => (
          <Menubar key={label} className="border-0">
            <MenubarMenu>
              <div className="relative">
                {href && href.startsWith("/") ? (
                  <Link href={href}>
                    <MenubarTrigger className="data-[state=open]:bg-transparent cursor-pointer hover:bg-gray-100">
                      {label}
                    </MenubarTrigger>
                  </Link>
                ) : (
                  <MenubarTrigger className="data-[state=open]:bg-transparent cursor-pointer hover:bg-gray-100">
                    {label}
                    {children && children.length > 0 && (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </MenubarTrigger>
                )}
                <AnimatePresence>
                  {pathname === href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 h-[1px] w-full bg-black"
                    ></motion.div>
                  )}
                </AnimatePresence>
              </div>

              {children && children.length > 0 && (
                <MenubarContent>
                  {children.map(({ label, href }) => (
                    <MenubarItem key={label}>
                      <Link href={href}>{label}</Link>
                    </MenubarItem>
                  ))}
                </MenubarContent>
              )}
            </MenubarMenu>
          </Menubar>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <Link href="/register">
          <Button variant="link">Register</Button>
        </Link>
        <Link href="/login">
          <Button className="bg-black text-white px-4 py-2 rounded-lg">
            Sign In
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
