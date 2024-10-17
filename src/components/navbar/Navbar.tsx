"use client"

import { useEffect, useState } from "react"
import NavItem from "./NavItem"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
  const pathName = usePathname().split("/")[1]
  const [isSpan, setIsSpan] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    if (isSpan) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isSpan])

  return (
    <div className='fixed top-0 right-0 left-0 flex items-center w-screen z-[100] backdrop-blur bg-background/70 dark:bg-background-dark/70'>
      <div className='container mx-auto py-2 h-12 hidden md:flex flex-row justify-between'>
        <div></div>
        <div className='h-full flex flex-row gap-x-5 items-center justify-center'>
          {/* if you want to use navitem the icon that from bootstrap will like bi bi-house in this case use just house the nev item will change it for you*/}
          <NavItem href='/' pathName={pathName}>
            Home
          </NavItem>
          <NavItem href='/about' pathName={pathName}>
            About
          </NavItem>
          <NavItem href='/project' pathName={pathName}>
            Project
          </NavItem>
          <NavItem href='/experience' pathName={pathName}>
            Experience
          </NavItem>
        </div>
        <div
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className='cursor-pointer align-middle h-8 w-8 flex items-center justify-center aspect-square rounded-md justify-self-end ml-5 self-center transition-all duration-200 bg-main-4 dark:bg-main-4-dark'>
          {theme == "dark" ? (
            <MoonIcon className='size-5' strokeWidth={2} />
          ) : (
            <SunIcon className='size-5' strokeWidth={2} />
          )}
        </div>
      </div>
      <div className='md:hidden container mx-auto'>
        <div className='flex justify-end py-2 h-12'>
          <div
            className='align-middle w-fit h-fit self-center cursor-pointer flex flex-row gap-x-2 items-center'
            onClick={() => setIsSpan(true)}>
            Menu{" "}
            <ChevronDownIcon
              className={`size-5 transition-all duration-200 ${
                isSpan && "rotate-180"
              }`}
              strokeWidth={2}
            />
          </div>
          <div
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className='cursor-pointer align-middle h-8 w-8 flex items-center justify-center aspect-square rounded-md justify-self-end ml-5 self-center transition-all duration-200 bg-main-4 dark:bg-main-4-dark'>
            {theme == "dark" ? (
              <MoonIcon className='size-5' strokeWidth={2} />
            ) : (
              <SunIcon className='size-5' strokeWidth={2} />
            )}
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/20 backdrop-blur z-[100] ${
          isSpan ? "block opacity-100" : "hidden opacity-0"
        }`}
        onClick={() => setIsSpan(false)}>
        <div className='container mx-auto py-2'>
          <div className='rounded-xl mt-12 py-5 px-10 bg-background dark:bg-background-dark flex flex-col gap-2'>
            <div className='flex flex-row justify-between items-center my-3'>
              Navigation
              <XMarkIcon className='size-5 cursor-pointer' strokeWidth={2} />
            </div>
            <NavItem href='/' pathName={pathName}>
              Home
            </NavItem>
            <hr className='dark:border-gray-500 my-2' />
            <NavItem href='/about' pathName={pathName}>
              About
            </NavItem>
            <hr className='dark:border-gray-500 my-2' />
            <NavItem href='/project' pathName={pathName}>
              Project
            </NavItem>
            <hr className='dark:border-gray-500 my-2' />
            <NavItem href='/experience' pathName={pathName}>
              Experience
            </NavItem>
          </div>
        </div>
      </div>
    </div>
  )
}
