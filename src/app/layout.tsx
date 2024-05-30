import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Bottom from "@/components/bottom/bottom";

const prompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "Supawit Mahadthai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <Navbar />
        <main className="container mx-auto pt-12 mb-10">{children}</main>
        <Bottom />
      </body>
    </html>
  );
}
