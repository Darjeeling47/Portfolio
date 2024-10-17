import MyWork from "@/libs/MyWork"
import WorkBox from "../basic/WorkBox"

export default function MiniWork() {
  const myWorks = MyWork()
  const delay = 400

  return (
    <div className='flex flex-col gap-y-8'>
      <h1 className='text-lg font-semibold text-main-1 dark:text-main-1-dark animate-fade-up animate-ease-in-out animate-delay-[350ms]'>
        Highlight experience
      </h1>
      {myWorks.map((work, id) => (
        <WorkBox data={work} delay={id * 50 + delay} />
      ))}
    </div>
  )
}
