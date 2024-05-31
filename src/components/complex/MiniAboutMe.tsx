import Image from "next/image";

export default function MiniAboutMe() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-x-10 p-5 md:p-18 lg:p-20 xl:py-20 xl:px-40">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-lg font-medium text-my-gray-300">About Me</h1>
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
      </div>
      <div className="w-full aspect-video relative rounded-3xl hidden lg:block rotate-6 min-w-52 z-[50]">
        <Image
          src={"/profile-3.png"}
          alt={"profile"}
          fill
          sizes="100vw"
          objectFit="cover"
          priority={true}
          className="rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
}
