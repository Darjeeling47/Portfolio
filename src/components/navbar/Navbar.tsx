"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname().split("/")[1];
  const [isSpan, setIsSpan] = useState(false);

  return (
    <div className="bg-white top-0 right-0 left-0 fixed flex w-screen items-center z-[100] shadow-sm">
      <div className="container mx-auto py-2 h-12 hidden md:block">
        <div className="flex flex-row gap-x-10 h-full items-center justify-center">
          {/* if you want to use navitem the icon that from bootstrap will like bi bi-house in this case use just house the nev item will change it for you*/}
          <NavItem href="/" pathName={pathName}>
            Home
          </NavItem>
          <NavItem href="/about" pathName={pathName}>
            About
          </NavItem>
          <NavItem href="/project" pathName={pathName}>
            Project
          </NavItem>
          <NavItem href="/experience" pathName={pathName}>
            Experience
          </NavItem>
          {/* <NavItem href="/award" pathName={pathName}>
            Award
          </NavItem>
          <NavItem href="/activity" pathName={pathName}>
            Activities
          </NavItem> */}
        </div>
      </div>
      <div className="block md:hidden container mx-auto py-2 h-12">
        <div className="flex flex-col gap-x-10 h-full">
          <div
            onClick={() => setIsSpan(!isSpan)}
            className="self-center text-end"
          >
            Menu
          </div>
          {isSpan ? <div>dal;skfj</div> : <></>}
        </div>
      </div>
    </div>
  );
}
