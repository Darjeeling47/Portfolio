import Image from "next/image"
import Link from "next/link"

export default function WorkBox({ data }: { data: any }) {
  return (
    <div className='group rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-100 p-3'>
      <Link href={data.link}>
        <div className='rounded-full !w-14 !h-14 bg-white border border-gray-100 flex justify-center items-center shadow-sm p-2 mb-2'>
          <Image
            src={data.image}
            alt='logo image'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full aspect-square rounded-full object-contain'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='font-medium text-md md:text-lg text-my-gray-300 dark:text-white'>
            {data.topic}
          </h1>
          <h2 className='font-light text-sm'>{data.company}</h2>
        </div>
        <p className='font-light text-md mt-2'>{data.description}</p>
        <p className='font-light text-md mt-3  group-hover:text-blue-500'>
          <i className='bi bi-link-45deg mr-3'></i>
          {data.linkDisplay}
        </p>
      </Link>
    </div>
  )
}
