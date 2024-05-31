import Image from "next/image";

export default function EducationBox({ data }: { data: any }) {
  return (
    <div className="flex flex-row w-full gap-5">
      <div className="h-full p-[3px] bg-my-gray-100 rounded-full text-transparent hidden lg:block"></div>
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex flex-row gap-x-5 items-center">
            <div className="rounded-full !w-14 !h-14 bg-white border border-gray-100 flex justify-center items-center shadow-sm p-2">
              <Image
                src={data.image}
                alt="logo image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full aspect-square rounded-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium text-md md:text-md text-my-gray-200">
                {data.topic}
              </h1>
              <h2 className="font-light text-sm">
                {data.startYear} - {data.endYear}
              </h2>
            </div>
          </div>
        </div>
        <p className="font-light text-md mt-2">{data.description}</p>
      </div>
    </div>
  );
}
