"use client"

import { BuildingOffice2Icon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProjectBox({ data }: { data: any }) {
  return (
    <div className='h-full w-full transition-all duration-200 hover:scale-95'>
      <Link href={"/"} className='flex flex-col gap-y-4'>
        <div className='border border-main-3 dark:border-main-3-dark rounded-lg w-full h-[200px] lg:h-[150px] relative aspect-auto'>
          <Image
            src={data.image[0]}
            alt='project image'
            fill
            sizes=' 100vw'
            objectFit='cover'
            className='rounded-lg aspect-auto'
          />
        </div>
        <div className='flex flex-col gap-y-1'>
          <h1 className='font-medium text-main-1 dark:text-main-1-dark'>
            {data.topic}
          </h1>
          <h2 className='flex flex-row gap-x-1 items-center'>
            <BuildingOffice2Icon className='size-4' strokeWidth={1.8} />
            {data.organization}
          </h2>
          <div className='flex flex-row gap-x-2 items-center text-sm'>
            <div
              className={`rounded-full size-3 flex items-center justify-center ${
                data.status == "Done" ? "bg-green-500/30" : "bg-yellow-500/30"
              }`}>
              <div
                className={`rounded-full size-1.5 ${
                  data.status == "Done" ? "bg-green-500" : "bg-yellow-500"
                }`}></div>
            </div>
            {data.status}
          </div>
        </div>
      </Link>
    </div>
  )
}
