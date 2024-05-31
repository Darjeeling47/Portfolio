"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProjectBox({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const maxIndex = data.image.length - 1

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    }
  }, [isOpen])

  const handleNextImageIndex = () => {
    if (imageIndex < maxIndex) setImageIndex(imageIndex + 1)
  }

  const handlePrevImageIndex = () => {
    if (imageIndex > 0) setImageIndex(imageIndex - 1)
  }

  return (
    <>
      <div
        className='h-full w-full flex flex-col rounded-2xl hover:bg-gray-100 dark:hover:bg-zinc-800 p-4 transition-all duration-200'
        onClick={() => setIsOpen(true)}>
        <div className='shadow-sm border border-gray-50 dark:border-gray-500 rounded-xl w-full h-[150px] relative'>
          <Image
            src={data.image[0]}
            alt='project image'
            fill
            sizes=' 100vw'
            objectFit='cover'
            className='rounded-xl'
          />
        </div>
        <h1 className='text-md mt-4 mb-1 dark:text-gray-300'>{data.topic}</h1>
        <p className='text-sm font-light line-clamp-2'>{data.description}</p>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-[100] bg-black/10 overflow-y-auto flex justify-center scrollbar-hide overflow-y py-20 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}>
        <div
          className='bg-white/60 dark:bg-zinc-900/70 my-backdrop-blur border border-gray-200 dark:border-gray-500 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[65%] xl:w-[60%] h-fit rounded-2xl p-5'
          onClick={(e) => e.stopPropagation()}>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-row justify-end items-center pb-1'>
              <i
                className='bi bi-x-lg hover:text-black dark:hover:text-white cursor-pointer transition-all duration-100'
                onClick={() => setIsOpen(false)}></i>
            </div>
            <div className='w-full h-fit flex flex-row justify-center items-center'>
              <i
                className='bi bi-chevron-left z-[110] text-2xl drop-shadow-lg left-5 hover:text-black dark:hover:text-white transition-all duration-100'
                onClick={handlePrevImageIndex}></i>
              <Image
                src={data.image[imageIndex]}
                alt='project image'
                width={0}
                height={0}
                sizes='100vw'
                objectFit='cover'
                className='w-full aspect-auto rounded-xl mb-4'
              />
              <i
                className='bi bi-chevron-right z-[110] text-2xl drop-shadow-lg right-5 hover:text-black dark:hover:text-white transition-all duration-100'
                onClick={handleNextImageIndex}></i>
            </div>

            <h1 className='text-my-gray-300 font-medium text-2xl dark:text-white'>
              {data.topic}
            </h1>
            <p className='font-light text-sm'>
              Year : {data.startYear} - {data.endYear}
            </p>
            <p className='font-light text-sm'>
              Codeing Tools : {data.codingLang.join(", ")}
            </p>
            <hr className='my-5 dark:border-gray-500' />
            <p className='font-light text-md'>{data.description}</p>
            {data.link.length > 0 ? (
              <Link
                href={data.link}
                className='font-light text-md mt-3 text-blue-500 hover:underline'>
                <i className='bi bi-link-45deg mr-3'></i>
                {data.link}
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  )
}
