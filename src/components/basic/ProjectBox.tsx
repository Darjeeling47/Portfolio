import Image from "next/image";

export default function ProjectBox({ data }: { data: any }) {
  return (
    <div className="h-full w-full flex flex-col rounded-2xl hover:bg-gray-100 p-4 transition-all duration-200">
      {/* <Image></Image> */}
      <div className="bg-gray-50 shadow-sm border border-gray-50 w-full h-[150px] rounded-xl flex justify-center items-center">
        Image
      </div>
      <h1 className="text-md mt-4 mb-1">{data.topic}</h1>
      <p className="text-sm font-light line-clamp-2">{data.description}</p>
    </div>
  );
}
