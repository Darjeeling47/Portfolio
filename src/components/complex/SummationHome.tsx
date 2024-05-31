import Education from "./Education";
import MiniWork from "./MiniWork";

export default function SummationHome() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 p-5 md:p-18 lg:p-20 xl:py-20 xl:px-40">
      <MiniWork />
      <Education />
    </div>
  );
}
