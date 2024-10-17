import ProjectList from "@/components/complex/ProjectList"
import MyProjects from "@/libs/MyProjects"

export default function Project() {
  const myProjects = MyProjects()

  return (
    <div>
      <h1 className='my-12 font-semibold text-4xl text-main-1 dark:text-main-1-dark'>
        Project
      </h1>
      <div className='flex flex-col gap-10'>
        {myProjects.map((yearOfProject, id) => (
          <div>
            <ProjectList
              title={yearOfProject.year}
              data={yearOfProject.data}
              yearId={id}
            />
            <hr className='my-3 border-main-3 dark:border-main-3-dark' />
          </div>
        ))}
      </div>
    </div>
  )
}
