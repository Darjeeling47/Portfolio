import ExperienceBox from "../basic/ExperienceBox"

export default function ExperienceList({ data }: { data: any[] }) {
  const delay = 50

  return (
    <div className='grid grid-cols-1 gap-y-5 md:gap-y-10 w-full '>
      {data.map((experience, id) => (
        <>
          <ExperienceBox data={experience} delay={id * 50 + delay} />
          <hr
            className='border border-main-3 dark:border-main-3-dark animate-fade-up animate-ease-in-out'
            style={{ animationDelay: `${id * 50 + delay}ms` }}
          />
        </>
      ))}
    </div>
  )
}
