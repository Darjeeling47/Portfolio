import ProjectList from "@/components/complex/ProjectList";
import MyProjects from "@/libs/MyProjects";

export default function Project() {
  const myProjects = MyProjects();

  return (
    <div>
      <h1 className="my-12 font-semibold text-4xl text-black">Project</h1>
      <div className="flex flex-col gap-10">
        {myProjects.map((yearOfProject) => (
          <>
            <ProjectList title={yearOfProject.year} data={yearOfProject.data} />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
