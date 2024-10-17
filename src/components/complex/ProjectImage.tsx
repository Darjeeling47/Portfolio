"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProjectImage({ data }: { data: any }) {
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
              className='rounded-lg aspect-auto w-full border border-main-3 dark:border-main-3-dark'
            />
          </div>
        ))}
      </div>
      {isShow && (
        <div
          className='fixed inset-0 bg-background/30 dark:bg-background-dark/30 backdrop-blur z-[101] flex items-center justify-center'
          onClick={() => handleHideImage()}>
          <Image
            src={data.image[index]}
            alt='project image'
            width={0}
            height={0}
            sizes=' 100vw'
            objectFit='cover'
            className='aspect-auto w-full m-5 sm:m-10 lg:m-28 z-[102]'
          />
        </div>
      )}
    </>
  )
}
