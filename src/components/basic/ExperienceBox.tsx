import Image from "next/image"
import Link from "next/link"
import ImageCover from "./ImageCover"
import {
  BuildingOffice2Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"

export default function ExperienceBox({
  data,
  delay,
}: {
  data: any
  delay: number
}) {
  return (
    <div
      className='grid grid-cols-1 gap-y-3 md:grid-cols-2 w-full animate-fade-up animate-ease-in-out'
      style={{ animationDelay: `${delay}ms` }}>
      <div className='w-full flex flex-col md:flex-row justify-left gap-x-5'>
        <ImageCover src={data.image} alt={data.topic} />
        <div className='flex flex-col gap-y-2'>
          <h1 className='font-medium text-md md:text-lg text-main-1 dark:text-main-1-dark'>
            {data.topic}
          </h1>
          <h2 className='flex flex-row gap-x-1 items-center'>
            <BuildingOffice2Icon className='size-5' strokeWidth={1.5} />
            {data.company}
          </h2>
          <h2 className='font-light text-sm'>
            {data.startYear} - {data.endYear}
          </h2>
          {data.link && (
            <Link
              href={data.link}
              className='font-light text-sm text-blue-500 dark:text-blue-400 flex flex-row items-center gap-x-1'>
              <MagnifyingGlassIcon className='size-4' /> View More
            </Link>
          )}
        </div>
      </div>
      <p className='font-light text-md mt-2'>{data.description}</p>
    </div>
  )
}
