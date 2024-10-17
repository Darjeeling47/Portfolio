import Link from "next/link"

export default function Bottom() {
  return (
    <div className='bottom-0 right-0 left-0 flex items-center z-[100] border-t border-main-3 dark:border-main-3-dark bg-background dark:bg-background-dark'>
      <div className='container mx-auto py-4 h-fit'>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 h-full items-center justify-between'>
          <div className='flex flex-row gap-5'>
            <Link
              href={"/"}
              className='hover:text-main-1 dark:hover:text-main-1-dark'>
              Home
            </Link>
            <Link
              href={"/about"}
              className='hover:text-main-1 dark:hover:text-main-1-dark'>
              About
            </Link>
            <Link
              href={"/project"}
              className='hover:text-main-1 dark:hover:text-main-1-dark'>
              Project
            </Link>
            <Link
              href={"/experience"}
              className='hover:text-main-1 dark:hover:text-main-1-dark'>
              Experience
            </Link>
          </div>
          <div className='text-sm font-light text-center lg:text-right'>
            © 2024 Supawit Mahadthai. All rights reserved. Yep I wrote it's bcus
            it's cool.
          </div>
        </div>
      </div>
    </div>
  )
}
