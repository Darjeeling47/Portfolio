import ProjectBox from "../basic/ProjectBox"

export default function ProjectList({
  title,
  data,
  yearId,
}: {
  title: string
  data: any[]
  yearId: number
}) {
  return (
    <div className='mb-7'>
      <div className='pb-7 flex flex-row gap-x-2 items-baseline'>
        <h1 className='text-2xl font-semibold text-main-1 dark:text-main-1-dark'>
          {title}
        </h1>
        <h2>({data.length} Projects)</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10'>
        {data.map((project, id) => (
          <ProjectBox data={project} id={id} yearId={yearId} />
        ))}
      </div>
    </div>
  )
}
