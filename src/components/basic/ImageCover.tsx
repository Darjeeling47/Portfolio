import Image from "next/image"

export default function ImageCover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className='rounded-full !min-w-14 !w-14 !h-14 aspect-square bg-background border border-main-3 dark:border-main-3-dark flex justify-center items-center p-2 mb-2'>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-full aspect-square rounded-full object-contain'
      />
    </div>
  )
}
