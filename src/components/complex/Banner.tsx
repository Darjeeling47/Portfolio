import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="h-dvh pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center">
      <div>
        <Image
          src={"/profile.jpeg"}
          alt="profile image"
          height={0}
          width={0}
          sizes="100vw"
          priority={true}
          className="rounded-[30px] aspect-square object-cover h-full w-full"
        ></Image>
      </div>
      <div className="flex flex-col gap-y-9">
        <div className="flex flex-row justify-center gap-5 lg:flex-col lg:justify-start text-black font-semibold text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl">
          <h1>SUPAWIT</h1>
          <h1>MAHADTHAI</h1>
        </div>
        <div className="flex flex-row gap-x-8 justify-center lg:justify-start text-3xl text-my-gray-200">
          <Link href={"#"}>
            <i className="bi bi-facebook hover:text-blue-500 transition-all duration-100"></i>
          </Link>
          <Link href={"#"}>
            <i className="bi bi-instagram hover:text-blue-500 transition-all duration-100"></i>
          </Link>
          <Link href={"#"}>
            <i className="bi bi-linkedin hover:text-blue-500 transition-all duration-100"></i>
          </Link>
          <Link href={"#"}>
            <i className="bi bi-github hover:text-blue-500 transition-all duration-100"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
