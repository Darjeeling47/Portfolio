"use client"

import MyEducation from "@/libs/MyEducation"
import EducationBox from "@/components/basic/EducationBox"

export default function Education() {
  const myEducation = MyEducation()

  return (
    <div className='flex flex-col gap-y-8'>
      <h1 className='text-lg font-semibold text-main-1 dark:text-main-1-dark'>
        Education
      </h1>
      {myEducation.map((data) => (
        <EducationBox data={data} />
      ))}
    </div>
  )
}
