import Banner from "@/components/complex/Banner";
import MiniAboutMe from "@/components/complex/MiniAboutMe";
import SummationWork from "@/components/complex/SummationWork";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <MiniAboutMe />
      <SummationWork />
    </div>
  );
}
