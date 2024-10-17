import { EnvelopeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Contact() {
  return (
    <div className='flex flex-col gap-y-3'>
      <h1 className='text-lg font-medium text-my-gray-300 dark:text-white'>
        Contact
      </h1>
      <Link
        href={"https://www.facebook.com/profile.php?id=100019637738479"}
        className=' transition-all duration-100'>
        <i className='bi bi-facebook mr-2'></i>Facebook
      </Link>
      <Link
        href={"https://www.instagram.com/nhzng_prame/"}
        className=' transition-all duration-100'>
        <i className='bi bi-instagram mr-2'></i>Instagram
      </Link>
      <Link
        href={"https://www.linkedin.com/in/supawit-mahadthai-ab9765287/"}
        className=' transition-all duration-100'>
        <i className='bi bi-linkedin mr-2'></i>Linkin
      </Link>
      <Link
        href={"https://github.com/Darjeeling47"}
        className=' transition-all duration-100'>
        <i className='bi bi-github mr-2'></i>Github
      </Link>
      <hr className='dark:border-gray-500' />
      <Link
        href={"mailto:supawit.ma@gmail.com"}
        className=' transition-all duration-100 flex flex-row items-center gap-x-2'>
        <EnvelopeIcon className='size-4' strokeWidth={2} /> supawit.ma@gmail.com
      </Link>
    </div>
  )
}
