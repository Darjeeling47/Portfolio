import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Bottom from "@/components/bottom/bottom"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Supawit Mahadthai",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-background dark:bg-background-dark text-main-2 dark:text-main-2-dark`}>
        <ThemeProvider attribute='class'>
          <Navbar />
          <main className='container mx-auto pt-12 mb-10'>{children}</main>
          <Bottom />
        </ThemeProvider>
      </body>
    </html>
  )
}
