"use client";

import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataStatus from "./DataStatus";

export default function ProjectBox({
  yearId,
  id,
  data,
  delay,
}: {
  yearId: number;
  id: number;
  data: any;
  delay: number;
}) {
  return (
    <div
      className="h-full w-full transition-all duration-200 hover:scale-95 animate-fade-up animate-ease-in-out"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link href={`/project/${yearId}/${id}`} className="flex flex-col gap-y-4">
        <div className="border border-main-3 dark:border-main-3-dark rounded-lg w-full h-[200px] lg:h-[150px] relative aspect-auto">
          <Image
            src={data.image[0]}
            alt="project image"
            fill
            sizes=" 100vw"
            objectFit="cover"
            className="rounded-lg aspect-auto"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <h1 className="font-medium text-main-1 dark:text-main-1-dark">
            {data.topic}
          </h1>
          <h2 className="flex flex-row gap-x-1 items-center">
            <BuildingOffice2Icon className="size-4" strokeWidth={1.8} />
            {data.organization}
          </h2>
          <DataStatus status={data.status.toString()} />
        </div>
      </Link>
    </div>
  );
}
