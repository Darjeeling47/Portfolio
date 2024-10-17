import { EnvelopeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Contact({ delay }: { delay: number }) {
  return (
    <div className='flex flex-col gap-y-3'>
      <h1
        className='text-lg font-medium text-my-gray-300 dark:text-white animate-fade-up animate-ease-in-out'
        style={{ animationDelay: `${delay}ms` }}>
        Contact
      </h1>
      <Link
        href={"https://www.facebook.com/profile.php?id=100019637738479"}
        className=' transition-all duration-100 animate-fade-up animate-ease-in-out'
        style={{ animationDelay: `${delay + 50}ms` }}>
        <i className='bi bi-facebook mr-2'></i>Facebook
      </Link>
      <Link
        href={"https://www.instagram.com/nhzng_prame/"}
        className=' transition-all duration-100 animate-fade-up animate-ease-in-out'
        style={{ animationDelay: `${delay + 100}ms` }}>
        <i className='bi bi-instagram mr-2'></i>Instagram
      </Link>
      <Link
        href={"https://www.linkedin.com/in/supawit-mahadthai-ab9765287/"}
        className=' transition-all duration-100 animate-fade-up animate-ease-in-out'
        style={{ animationDelay: `${delay + 150}ms` }}>
        <i className='bi bi-linkedin mr-2'></i>Linkin
      </Link>
      <Link
        href={"https://github.com/Darjeeling47"}
        className=' transition-all duration-100 animate-fade-up animate-ease-in-out'
        style={{ animationDelay: `${delay + 200}ms` }}>
        <i className='bi bi-github mr-2'></i>Github
      </Link>
      <hr
        className='dark:border-gray-500 animate-fade-up animate-ease-in-out'
        style={{ animationDelay: `${delay + 250}ms` }}
      />
      <Link
        href={"mailto:supawit.ma@gmail.com"}
        className=' transition-all duration-100 flex flex-row items-center gap-x-2 animate-fade-up animate-ease-in-out'
        style={{ animationDelay: `${delay + 300}ms` }}>
        <EnvelopeIcon className='size-4' strokeWidth={2} /> supawit.ma@gmail.com
      </Link>
    </div>
  )
}
