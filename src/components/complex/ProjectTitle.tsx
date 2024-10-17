import { BuildingOffice2Icon } from "@heroicons/react/24/outline"
import DataStatus from "../basic/DataStatus"

export default function ProjectTitle({ data }: { data: any }) {
  return (
    <div className='flex flex-col gap-y-2'>
      <h1 className='font-semibold text-3xl text-main-1 dark:text-main-1-dark'>
        {data.topic}
      </h1>
      <h2 className='flex flex-row gap-x-1 items-center text-xl'>
        <BuildingOffice2Icon className='size-5' strokeWidth={2} />
        {data.organization}
      </h2>
      <DataStatus status={data.status.toString()} />
    </div>
  )
}
