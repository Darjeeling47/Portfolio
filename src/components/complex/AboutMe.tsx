import Image from "next/image";
import Link from "next/link";
import Contact from "./Contact";
import Education from "./Education";

export default function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row gap-14 p-5 md:p-18 lg:p-20 xl:py-20 xl:px-40">
      <div className="flex flex-col w-1/2 lg:w-1/3 gap-10">
        <div className="w-full aspect-square relative rounded-3xl">
          <Image
            src={"/profile-2.png"}
            alt={"profile"}
            fill
            sizes="100vw"
            objectFit="cover"
            priority={true}
            className="rounded-3xl shadow-lg"
          />
        </div>
        <div className="hidden lg:block">
          <Contact />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-2/3 gap-y-10">
        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-my-gray-300">
            Hi I'm Supawit Mahadthai
          </h1>
          <h2>A Software Developer, Project Manager</h2>
        </div>
        <p>
          ผมเป็นคนที่สนใจในการเขียนโปรแกรม และการจัดการบริหารต่าง ๆ
          ซึ่งผมก็มีประสบการณ์ในการจัดการดูแลโครงการ
          ซึ่งส่วนใหญ่จะเกี่ยวกับการพัฒนาบุคคลเป็นหลัก
          ทั้งยังมีประสบการณ์ในการพัฒนาเว็บไซต์แบบ full stack
          โดยบางโปรเจ็คก็ได้ชนะการแข่งขัน
          ซึ่งตอนนี้อยู่ในช่วงการพัฒนาเพื่อนำมาใช้จริง
          และมีโปรเจ็คบางตัวก็ได้มีการนำไปใช้จริงแล้วด้วย
          ผมมีประสบการณ์การทำงานร่วมกับผู้อื่นทั้งในระดับโรงเรียน และระดับบริษัท
          ซึ่งมีหลายตำแหน่งเช่น ผู้ดูแลโครงการ เป็นต้น
        </p>
        <p>
          ผมเป็นคนที่สนใจในการเขียนโปรแกรม และการจัดการบริหารต่าง ๆ
          ซึ่งผมก็มีประสบการณ์ในการจัดการดูแลโครงการ
          ซึ่งส่วนใหญ่จะเกี่ยวกับการพัฒนาบุคคลเป็นหลัก
          ทั้งยังมีประสบการณ์ในการพัฒนาเว็บไซต์แบบ full stack
          โดยบางโปรเจ็คก็ได้ชนะการแข่งขัน
          ซึ่งตอนนี้อยู่ในช่วงการพัฒนาเพื่อนำมาใช้จริง
          และมีโปรเจ็คบางตัวก็ได้มีการนำไปใช้จริงแล้วด้วย
          ผมมีประสบการณ์การทำงานร่วมกับผู้อื่นทั้งในระดับโรงเรียน และระดับบริษัท
          ซึ่งมีหลายตำแหน่งเช่น ผู้ดูแลโครงการ เป็นต้น
        </p>
        <p>
          ผมเป็นคนที่สนใจในการเขียนโปรแกรม และการจัดการบริหารต่าง ๆ
          ซึ่งผมก็มีประสบการณ์ในการจัดการดูแลโครงการ
          ซึ่งส่วนใหญ่จะเกี่ยวกับการพัฒนาบุคคลเป็นหลัก
          ทั้งยังมีประสบการณ์ในการพัฒนาเว็บไซต์แบบ full stack
          โดยบางโปรเจ็คก็ได้ชนะการแข่งขัน
          ซึ่งตอนนี้อยู่ในช่วงการพัฒนาเพื่อนำมาใช้จริง
          และมีโปรเจ็คบางตัวก็ได้มีการนำไปใช้จริงแล้วด้วย
          ผมมีประสบการณ์การทำงานร่วมกับผู้อื่นทั้งในระดับโรงเรียน และระดับบริษัท
          ซึ่งมีหลายตำแหน่งเช่น ผู้ดูแลโครงการ เป็นต้น
        </p>
        <Education />
      </div>
      <div className="lg:hidden">
        <Contact />
      </div>
    </div>
  );
}
