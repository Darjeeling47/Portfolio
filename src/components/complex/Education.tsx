"use client"

import MyEducation from "@/libs/MyEducation"
import EducationBox from "@/components/basic/EducationBox"

export default function Education({ delay }: { delay: number }) {
  const myEducation = MyEducation()

  return (
    <div className='flex flex-col gap-y-8'>
      <h1
        className='text-lg font-semibold text-main-1 dark:text-main-1-dark animate-fade-up animate-ease-in-out'
        style={{ animationDelay: `${delay}ms` }}>
        Education
      </h1>
      {myEducation.map((data, id) => (
        <EducationBox data={data} delay={id * 50 + delay + 50} />
      ))}
    </div>
  )
}
