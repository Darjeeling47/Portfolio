"use client"

import MyEducation from "@/libs/MyEducation"
import EducationBox from "@/components/basic/EducationBox"

export default function Education() {
  const myEducation = MyEducation()

  return (
    <div className='flex flex-col gap-y-4'>
      <h1 className='text-lg font-medium text-my-gray-300 dark:text-white'>
        Education
      </h1>
      {myEducation.map((data) => (
        <EducationBox data={data} />
      ))}
    </div>
  )
}
