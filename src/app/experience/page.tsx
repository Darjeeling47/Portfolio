import ExperienceList from "@/components/complex/ExperienceList"
import MyExperiences from "@/libs/MyExperiences"

export default function Experience() {
  const myExperiences = MyExperiences()

  return (
    <div>
      <h1 className='my-12 font-semibold text-4xl text-main-1 dark:text-main-1-dark animate-fade-up animate-ease-in-out'>
        Experience
      </h1>
      <ExperienceList data={myExperiences} />
    </div>
  )
}
