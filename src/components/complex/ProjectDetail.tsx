import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"
import DataStatus from "../basic/DataStatus"
import Link from "next/link"

export default function ProjectDetail({ data }: { data: any }) {
  return (
    <div className='flex flex-col gap-y-10'>
      <div className='flex flex-col gap-y-2'>
        <h2 className='flex flex-row gap-x-1 items-center animate-fade-up animate-ease-in-out animate-delay-[150ms]'>
          <CalendarDaysIcon className='size-4' strokeWidth={1.8} />
          {data.startYear} - {data.endYear}
        </h2>
        <h2 className='flex flex-row gap-x-1 items-center animate-fade-up animate-ease-in-out animate-delay-[200ms]'>
          <UserIcon className='size-4' strokeWidth={1.8} />
          {data.role.join(", ")}
        </h2>
        <h2 className='flex flex-row gap-x-1 items-center animate-fade-up animate-ease-in-out animate-delay-[250ms]'>
          <WrenchScrewdriverIcon className='size-4' strokeWidth={1.8} />
          {data.codingLang.join(", ")}
        </h2>
        {data.link && (
          <Link
            href={data.link}
            className='font-light text-sm text-blue-500 dark:text-blue-400 flex flex-row items-center gap-x-1 animate-fade-up animate-ease-in-out animate-delay-[300ms]'>
            <MagnifyingGlassIcon className='size-4' strokeWidth={1.8} /> View My
            Project
          </Link>
        )}
      </div>
    </div>
  )
}
