import Link from "next/link";

export default function Bottom() {
  return (
    <div className="bg-white bottom-0 right-0 left-0 flex items-center z-[100] border-t">
      <div className="container mx-auto py-2 h-fit">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 h-full items-center justify-between">
          <div className="flex flex-row gap-5">
            <Link href={"/"} className="hover:text-my-gray-300">
              Home
            </Link>
            <Link href={"/about"} className="hover:text-my-gray-300">
              About
            </Link>
            <Link href={"/project"} className="hover:text-my-gray-300">
              Project
            </Link>
            <Link href={"/experience"} className="hover:text-my-gray-300">
              Experience
            </Link>
          </div>
          <div className="text-sm font-light text-center lg:text-right">
            © 2024 Supawit Mahadthai. All rights reserved. Yep I worte it's bcus
            it's cool.
          </div>
        </div>
      </div>
    </div>
  );
}
