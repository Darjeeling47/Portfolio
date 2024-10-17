import ExperienceBox from "../basic/ExperienceBox"

export default function ExperienceList({ data }: { data: any[] }) {
  return (
    <div className='grid grid-cols-1 gap-y-5 md:gap-y-10 w-full '>
      {data.map((experience) => (
        <>
          <ExperienceBox data={experience} />
          <hr className='border border-main-3 dark:border-main-3-dark' />
        </>
      ))}
    </div>
  )
}
