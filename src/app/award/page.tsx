import AwardList from "@/components/complex/AwardList";
import MyAward from "@/libs/MyAward";

export default function Award() {
  const myAward = MyAward();

  return (
    <div>
      <h1 className="my-12 font-semibold text-4xl text-black">Award</h1>
      <AwardList data={myAward} />
    </div>
  );
}
