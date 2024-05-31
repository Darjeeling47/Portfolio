import Banner from "@/components/complex/Banner";
import MiniAboutMe from "@/components/complex/MiniAboutMe";
import SummationHome from "@/components/complex/SummationHome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <MiniAboutMe />
      <SummationHome />
    </div>
  );
}
