"use client"

import { useEffect, useState } from "react"
import NavItem from "./NavItem"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

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
    <div className='bg-white dark:bg-black dark:border-b dark:border-gray-500 dark:glow top-0 right-0 left-0 fixed flex w-screen items-center z-[100] shadow-sm'>
      <div className='container mx-auto py-2 h-12 hidden md:flex flex-row justify-between'>
        <div></div>
        <div className='flex flex-row gap-x-10 h-full items-center justify-center'>
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
          {/* <NavItem href="/award" pathName={pathName}>
            Award
          </NavItem>
          <NavItem href="/activity" pathName={pathName}>
            Activities
          </NavItem> */}
        </div>
        <div
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className='align-middle border dark:border-gray-500 h-8 w-8 flex items-center justify-center aspect-square rounded-full justify-self-end ml-5 self-center hover:text-white hover:bg-blue-500 transition-all duration-100'>
          {theme == "dark" ? (
            <i className='bi bi-moon-stars-fill'></i>
          ) : (
            <i className='bi bi-sun-fill'></i>
          )}
        </div>
      </div>
      <div className='md:hidden container mx-auto'>
        <div className='flex justify-end py-2 h-12'>
          <div
            className='align-middle w-fit h-fit self-center'
            onClick={() => setIsSpan(true)}>
            Menu{" "}
            {isSpan ? (
              <i className='bi bi-chevron-up'></i>
            ) : (
              <i className='bi bi-chevron-down'></i>
            )}
          </div>
          <div
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className='align-middle border dark:border-gray-500 h-8 w-8 flex items-center justify-center aspect-square rounded-full justify-self-end ml-5 self-center hover:text-white hover:bg-blue-500 transition-all duration-100'>
            {theme == "dark" ? (
              <i className='bi bi-moon-stars-fill'></i>
            ) : (
              <i className='bi bi-sun-fill'></i>
            )}
          </div>
        </div>
      </div>
      {isSpan ? (
        <div
          className='md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/20 my-backdrop-blur z-[100]'
          onClick={() => setIsSpan(false)}>
          <div className='container mx-auto'>
            <div className='rounded-xl border mt-12 p-4 px-10 bg-white dark:bg-zinc-900 dark:border-gray-500 flex flex-col gap-2'>
              <i
                className='bi bi-x-lg hover:text-black dark:hover:text-white cursor-pointer transition-all duration-100 text-end '
                onClick={() => setIsSpan(false)}></i>
              <NavItem href='/' pathName={pathName}>
                Home
              </NavItem>
              <hr className='dark:border-gray-500' />
              <NavItem href='/about' pathName={pathName}>
                About
              </NavItem>
              <hr className='dark:border-gray-500' />
              <NavItem href='/project' pathName={pathName}>
                Project
              </NavItem>
              <hr className='dark:border-gray-500' />
              <NavItem href='/experience' pathName={pathName}>
                Experience
              </NavItem>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
