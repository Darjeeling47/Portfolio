import ProjectBox from "../basic/ProjectBox";

export default function ProjectList({
  title,
  data,
}: {
  title: string;
  data: any[];
}) {
  return (
    <div>
      <div className="text-2xl font-semibold pb-4">{title}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10">
        {data.map((project) => (
          <ProjectBox data={project} />
        ))}
      </div>
    </div>
  );
}
