import Image from "next/image"
import Link from "next/link"

export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row gap-14 p-5 md:p-18 lg:p-20 xl:py-20 xl:px-40 lg:items-center'>
      <div className='flex flex-col w-1/2 lg:w-1/3 gap-10'>
        <div className='w-full aspect-square relative rounded-3xl animate-fade-up animate-ease-in-out'>
          <Image
            src={"/profile.png"}
            alt={"profile"}
            fill
            sizes='100vw'
            objectFit='cover'
            priority={true}
            className='rounded-3xl'
          />
        </div>
      </div>
      <div className='flex flex-col w-full lg:w-2/3 gap-y-7'>
        <div className='flex flex-col gap-y-4 animate-fade-up animate-ease-in-out'>
          <h1 className='font-semibold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-main-1 dark:text-main-1-dark'>
            Hi I'm Supawit Mahadthai
          </h1>
          <h2>A Software Developer, Project Manager</h2>
        </div>
        <div className='flex flex-row gap-x-8 justify-start text-xl'>
          <Link
            href={"https://www.facebook.com/profile.php?id=100019637738479"}
            className='animate-fade-up animate-ease-in-out animate-delay-[50ms]'>
            <i className='bi bi-facebook transition-all duration-100'></i>
          </Link>
          <Link
            href={"https://www.instagram.com/nhzng_prame/"}
            className='animate-fade-up animate-ease-in-out animate-delay-[100ms]'>
            <i className='bi bi-instagram transition-all duration-100'></i>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/supawit-mahadthai-ab9765287/"}
            className='animate-fade-up animate-ease-in-out animate-delay-[150ms]'>
            <i className='bi bi-linkedin transition-all duration-100'></i>
          </Link>
          <Link
            href={"https://github.com/Darjeeling47"}
            className='animate-fade-up animate-ease-in-out animate-delay-[200ms]'>
            <i className='bi bi-github transition-all duration-100'></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
