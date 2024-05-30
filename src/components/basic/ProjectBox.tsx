"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectBox({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="h-full w-full flex flex-col rounded-2xl hover:bg-gray-100 p-4 transition-all duration-200"
        onClick={() => setIsHovered(true)}
      >
        <div className="shadow-sm border border-gray-50 rounded-xl w-full h-[150px] relative">
          <Image
            src={data.image[0]}
            alt="project image"
            fill
            sizes=" 100vw"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <h1 className="text-md mt-4 mb-1">{data.topic}</h1>
        <p className="text-sm font-light line-clamp-2">{data.description}</p>
      </div>
      <div className="hidden"></div>
    </>
  );
}
