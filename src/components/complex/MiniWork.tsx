import MyWork from "@/libs/MyWork";
import WorkBox from "../basic/WorkBox";

export default function MiniWork() {
  const myWorks = MyWork();

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-lg font-medium text-my-gray-300">Work</h1>
      {myWorks.map((work) => (
        <WorkBox data={work} />
      ))}
    </div>
  );
}
