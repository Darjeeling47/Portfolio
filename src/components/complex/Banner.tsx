import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row gap-14 p-5 md:p-18 lg:p-20 xl:py-20 xl:px-40 lg:items-center">
      <div className="flex flex-col w-1/2 lg:w-1/3 gap-10">
        <div className="w-full aspect-square relative rounded-3xl">
          <Image
            src={"/profile.png"}
            alt={"profile"}
            fill
            sizes="100vw"
            objectFit="cover"
            priority={true}
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-2/3 gap-y-7">
        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-my-gray-300">
            Hi I'm Supawit Mahadthai
          </h1>
          <h2>A Software Developer, Project Manager</h2>
        </div>
        <div className="flex flex-row gap-x-8 justify-start text-xl text-my-gray-200">
          <Link
            href={"https://www.facebook.com/profile.php?id=100019637738479"}
          >
            <i className="bi bi-facebook hover:text-blue-500 transition-all duration-100"></i>
          </Link>
          <Link href={"https://www.instagram.com/nhzng_prame/"}>
            <i className="bi bi-instagram hover:text-blue-500 transition-all duration-100"></i>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/supawit-mahadthai-ab9765287/"}
          >
            <i className="bi bi-linkedin hover:text-blue-500 transition-all duration-100"></i>
          </Link>
          <Link href={"https://github.com/Darjeeling47"}>
            <i className="bi bi-github hover:text-blue-500 transition-all duration-100"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
