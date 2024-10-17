"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function NavItem({
  children,
  href,
  pathName,
}: {
  children: React.ReactNode
  href: string
  pathName: string
}) {
  const [textColor, setTextColor] = useState(
    "text-main-2 dark:text-main-2-dark"
  )

  useEffect(() => {
    if (pathName == href.split("/")[1]) {
      setTextColor(
        "text-main-1 dark:text-main-1-dark bg-main-4 dark:bg-main-4-dark"
      )
    } else {
      setTextColor("text-main-2 dark:text-main-2-dark")
    }
  }, [pathName])

  return (
    <Link
      href={href}
      className={`${textColor} px-3 py-1 rounded-md flex flex-row justify-center items-center font-medium hover:text-black transition-all duration-200 w-fit`}>
      {children}
    </Link>
  )
}
