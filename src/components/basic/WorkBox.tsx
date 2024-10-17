import Image from "next/image"
import Link from "next/link"
import ImageCover from "./ImageCover"
import { BuildingOffice2Icon } from "@heroicons/react/24/outline"

export default function WorkBox({ data }: { data: any }) {
  return (
    <div className='relative rounded-lg transition-all duration-200 space-y-2'>
      <p className='absolute top-2 right-2 font-light text-sm'>
        {data.duration}
      </p>
      <ImageCover src={data.image} alt={data.topic} />
      <div className='flex flex-col space-y-1'>
        <h1 className='font-medium text-md md:text-lg text-main-1 dark:text-main-1-dark'>
          {data.topic}
        </h1>
        <h2 className='flex flex-row gap-x-1 items-center font-light'>
          <BuildingOffice2Icon className='size-4' strokeWidth={1.5} />
          {data.company}
        </h2>
      </div>
    </div>
  )
}
