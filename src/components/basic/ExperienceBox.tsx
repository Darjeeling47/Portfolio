import Image from "next/image";
import Link from "next/link";

export default function ExperienceBox({ data }: { data: any }) {
  return (
    <div className="flex flex-row w-full gap-5">
      <div className="h-full p-1 bg-my-gray-100 rounded-full text-transparent hidden md:block"></div>
      <Link
        href={data.link}
        className="w-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200 rounded-lg p-3 group"
      >
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div className="flex flex-row gap-x-5 items-center">
            <div className="rounded-full !min-w-14 !w-14 !h-14 bg-white border border-gray-100 flex justify-center items-center shadow-sm p-2">
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
              <h1 className="font-medium text-md md:text-lg text-my-gray-300 dark:text-white">
                {data.topic}
              </h1>
              <h2 className="font-light text-sm">{data.company}</h2>
            </div>
          </div>
          <p className="font-light text-sm pt-2 md:pt-0">
            {data.startYear} - {data.endYear}
          </p>
        </div>
        {/* <hr className="md:hidden my-1" /> */}
        <p className="font-light text-md mt-2">{data.description}</p>

        <p className="font-light text-md mt-3  group-hover:text-blue-500">
          <i className="bi bi-link-45deg mr-3"></i>
          {data.linkDisplay}
        </p>
      </Link>
    </div>
  );
}
