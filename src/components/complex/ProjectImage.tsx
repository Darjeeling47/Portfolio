"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ProjectImage({
  data,
  delay,
}: {
  data: any
  delay: number
}) {
  const imageLength = data.image.length
  const [index, setIndex] = useState(0)
  const [isShow, setIsShow] = useState(false)

  const handleShowImage = (index: number) => {
    setIndex(index)
    setIsShow(true)
  }

  const handleHideImage = () => {
    setIndex(0)
    setIsShow(false)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowRight") {
      if (index === imageLength - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    } else if (e.key === "ArrowLeft") {
      if (index === 0) {
        setIndex(imageLength - 1)
      } else {
        setIndex(index - 1)
      }
    }
  }

  const handleNextImage = () => {
    if (index === imageLength - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const handlePrevImage = () => {
    if (index === 0) {
      setIndex(imageLength - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 w-full relative'>
        {data.image.map((image: any, index: number) => (
          <div
            className='rounded-lg w-full aspect-[16/8] h-fit'
            onClick={() => handleShowImage(index)}>
            <Image
              src={image}
              alt='project image'
              width={0}
              height={0}
              sizes=' 100vw'
              objectFit='cover'
              className='rounded-lg aspect-auto w-full border border-main-3 dark:border-main-3-dark animate-fade-up animate-ease-in-out'
              style={{ animationDelay: `${delay + index * 50}ms` }}
            />
          </div>
        ))}
      </div>
      {isShow && (
        <div
          className='fixed inset-0 bg-background/30 dark:bg-background-dark/30 backdrop-blur z-[101] flex items-center justify-between px-1 lg:px-10'
          onClick={() => handleHideImage()}
          onKeyDown={(e) => {
            handleKeyDown(e)
          }}>
          <div
            className='rounded-full bg-main-4 dark:bg-main-4-dark p-1 lg:p-3 flex items-center justify-center'
            onClick={(e) => {
              e.stopPropagation()
              handlePrevImage()
            }}>
            <ChevronLeftIcon className='size-5 lg:size-10 cursor-pointer' />
          </div>
          <Image
            src={data.image[index]}
            alt='project image'
            width={0}
            height={0}
            sizes=' 100vw'
            objectFit='cover'
            className='aspect-auto w-full m-5 sm:m-10 lg:m-28 z-[102]'
          />
          <div
            className='rounded-full bg-main-4 dark:bg-main-4-dark p-1 lg:p-3 flex items-center justify-center'
            onClick={(e) => {
              e.stopPropagation()
              handleNextImage()
            }}>
            <ChevronRightIcon className='size-5 lg:size-10 cursor-pointer' />
          </div>
        </div>
      )}
    </>
  )
}
