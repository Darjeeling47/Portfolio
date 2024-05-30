import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-lg font-medium text-my-gray-300">Contact</h1>
      <Link
        href={"https://www.facebook.com/profile.php?id=100019637738479"}
        className="hover:text-blue-500 transition-all duration-100"
      >
        <i className="bi bi-facebook mr-2"></i>Facebook
      </Link>
      <Link
        href={"https://www.instagram.com/nhzng_prame/"}
        className="hover:text-blue-500 transition-all duration-100"
      >
        <i className="bi bi-instagram mr-2"></i>Instagram
      </Link>
      <Link
        href={"https://www.linkedin.com/in/supawit-mahadthai-ab9765287/"}
        className="hover:text-blue-500 transition-all duration-100"
      >
        <i className="bi bi-linkedin mr-2"></i>Linkin
      </Link>
      <Link
        href={"https://github.com/Darjeeling47"}
        className="hover:text-blue-500 transition-all duration-100"
      >
        <i className="bi bi-github mr-2"></i>Github
      </Link>
      <hr />
      <Link
        href={"mailto:supawit.ma@gmail.com"}
        className="hover:text-blue-500 transition-all duration-100"
      >
        <i className="bi bi-envelope-fill mr-2"></i>supawit.ma@gmail.com
      </Link>
    </div>
  );
}
