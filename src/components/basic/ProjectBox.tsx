import Image from "next/image";

export default function ProjectBox({ data }: { data: any }) {
  return (
    <div className="h-full w-full flex flex-col rounded-2xl hover:bg-white p-4 transition-all duration-200">
      {/* <Image></Image> */}
      <div className="bg-my-gray-100 shadow-sm w-full h-[150px] rounded-xl flex justify-center items-center">
        Image
      </div>
      <h1 className="text-md mt-4 mb-1">{data.topic}</h1>
      <p className="text-sm font-light line-clamp-2">{data.description}</p>
    </div>
  );
}
