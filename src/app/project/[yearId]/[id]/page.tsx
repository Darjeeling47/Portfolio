import DataStatus from "@/components/basic/DataStatus"
import ProjectDetail from "@/components/complex/ProjectDetail"
import ProjectImage from "@/components/complex/ProjectImage"
import ProjectTitle from "@/components/complex/ProjectTitle"
import MyProjectByYearAndId from "@/libs/MyProjectByYearAndId"
import { BuildingOffice2Icon } from "@heroicons/react/24/outline"

export default function Project({
  params,
}: {
  params: { yearId: string; id: string }
}) {
  const data = MyProjectByYearAndId(params)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 my-12 gap-x-10 '>
      <div className='flex flex-col gap-y-10'>
        <ProjectTitle data={data} />
        <ProjectDetail data={data} />
        <div className='block lg:hidden'>
          <ProjectImage data={data} delay={400} />
        </div>
        <hr className='border border-main-3 dark:border-main-3-dark animate-fade-up animate-ease-in-out animate-delay-[500ms] lg:animate-delay-[300ms]'></hr>
        <p className='animate-fade-up animate-ease-in-out animate-delay-[600ms] lg:animate-delay-[350ms]'>
          {data.description}
        </p>
      </div>
      <div className='hidden lg:block'>
        <ProjectImage data={data} delay={0} />
      </div>
    </div>
  )
}
