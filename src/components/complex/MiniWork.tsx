import MyWork from "@/libs/MyWork"
import WorkBox from "../basic/WorkBox"

export default function MiniWork() {
  const myWorks = MyWork()

  return (
    <div className='flex flex-col gap-y-8'>
      <h1 className='text-lg font-semibold text-main-1 dark:text-main-1-dark'>
        Highlight experience
      </h1>
      {myWorks.map((work) => (
        <WorkBox data={work} />
      ))}
    </div>
  )
}
