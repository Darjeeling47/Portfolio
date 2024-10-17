import Image from "next/image"
import Link from "next/link"
import Contact from "./Contact"
import Education from "./Education"
import MyStory from "@/libs/MyStory"

export default function AboutMe() {
  const myStory = MyStory()

  return (
    <div className='flex flex-col lg:flex-row gap-14 p-5 md:p-18 lg:p-20 xl:py-20 xl:px-40'>
      <div className='flex flex-col w-1/2 lg:w-1/3 gap-10'>
        <div className='w-full aspect-square relative rounded-3xl animate-fade-up animate-ease-in-out'>
          <Image
            src={"/profile-2.png"}
            alt={"profile"}
            fill
            sizes='100vw'
            objectFit='cover'
            priority={true}
            className='rounded-3xl'
          />
        </div>
        <div className='hidden lg:block'>
          <Contact delay={50} />
        </div>
      </div>
      <div className='flex flex-col w-full lg:w-2/3 gap-y-10'>
        <div className='flex flex-col gap-y-4'>
          <h1 className='font-semibold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-main-1 dark:text-main-1-dark animate-fade-up animate-ease-in-out'>
            Hi I'm Supawit Mahadthai
          </h1>
          <h2 className='animate-fade-up animate-ease-in-out animate-delay-[50ms]'>
            A Software Developer, Project Manager
          </h2>
        </div>
        {myStory.map((story, id) => (
          <p
            className='font-light animate-fade-up animate-ease-in-out'
            style={{ animationDelay: `${id * 50 + 100}ms` }}>
            {story}
          </p>
        ))}
        <Education delay={400} />
      </div>
      <div className='lg:hidden'>
        <Contact delay={550} />
      </div>
    </div>
  )
}
