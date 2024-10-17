import MyProjects from "./MyProjects"

export default function MyProjectByYearAndId({
  yearId,
  id,
}: {
  yearId: string
  id: string
}) {
  const myProjects = MyProjects()

  return myProjects[parseInt(yearId)].data[parseInt(id)]
}
