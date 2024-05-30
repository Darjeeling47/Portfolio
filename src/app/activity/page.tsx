import ActivityList from "@/components/complex/ActivityList";
import MyActivity from "@/libs/MyActivity";

export default function Activity() {
  const myActivities = MyActivity();

  return (
    <div>
      <h1 className="my-12 font-semibold text-4xl text-black">Activities</h1>
      <ActivityList data={myActivities} />
    </div>
  );
}
