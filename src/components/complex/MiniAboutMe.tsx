import Image from "next/image"

export default function MiniAboutMe() {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between gap-x-10 p-5 md:p-18 lg:p-20 lg:py-14 xl:py-14 xl:px-40'>
      <div className='flex flex-col gap-y-3 animate-fade-up animate-ease-in-out animate-delay-[250ms]'>
        <h1 className='text-lg font-semibold text-main-1 dark:text-main-1-dark'>
          About Me
        </h1>
        <p>
          I am passionate about programming and project management, with
          experience in full-stack web development and personal development
          projects. My work has won competitions and been implemented. I have
          led teams at both school and corporate levels as a project manager. I
          am excited about the future and committed to making a positive impact
          on the world.
        </p>
      </div>
      <div className='w-full aspect-video relative rounded-3xl hidden lg:block rotate-6 min-w-52 z-[50] animate-fade-up animate-ease-in-out animate-delay-[300ms]'>
        <Image
          src={"/profile-3.png"}
          alt={"profile"}
          fill
          sizes='100vw'
          objectFit='cover'
          priority={true}
          className='rounded-3xl'
        />
      </div>
    </div>
  )
}
