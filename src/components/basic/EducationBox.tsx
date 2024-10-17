import Image from "next/image"
import ImageCover from "./ImageCover"

export default function EducationBox({ data }: { data: any }) {
  return (
    <div className='flex flex-row w-full gap-5'>
      <div className='h-full p-[3px] bg-main-3 dark:bg-main-3-dark rounded-full text-transparent hidden lg:block'></div>
      <div className='w-full'>
        <div className='w-full flex flex-col md:flex-row'>
          <div className='flex flex-row gap-x-5 items-center'>
            <ImageCover src={data.image} alt={data.topic} />
            <div className='flex flex-col'>
              <h1 className='font-medium text-md md:text-md text-main-1 dark:text-main-1-dark'>
                {data.topic}
              </h1>
              <h2 className='font-light text-sm'>
                {data.startYear} - {data.endYear}
              </h2>
            </div>
          </div>
        </div>
        <p className='font-light text-md mt-2'>{data.description}</p>
      </div>
    </div>
  )
}
