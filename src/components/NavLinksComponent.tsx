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
const NavLinksComponent = () => {
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
          label: "Featured Jobs",
          href: "#",
        },
        {
          label: "Find Jobs",
          href: "#",
        },
        {
          label: "Selseve Jobs",
          href: "#",
        },
      ],
    },
    {
      label: "Services",
      children: [
        {
          label: "All Sevices",
          href: "/services",
        },
        {
          label: "Selseve Services",
          href: "#",
        },
        {
          label: "Services By Category",
          href: "#",
        },
        {
          label: "Services By Location",
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
    <div className="flex items-center space-x-1">
      {navData.map(({ label, href, children }) => (
        <Menubar key={label} className="border-0 bg-transparent">
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
                  <Link href={href} key={label}>
                    <MenubarItem>{label}</MenubarItem>
                  </Link>
                ))}
              </MenubarContent>
            )}
          </MenubarMenu>
        </Menubar>
      ))}
    </div>
  );
};

export default NavLinksComponent;
