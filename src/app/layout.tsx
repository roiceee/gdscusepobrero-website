import Footer from "@/components/footer";
import { StickyNavbar } from "@/components/navbar";
import type { Metadata } from "next";
import googleSans from "next/font/local";
import "../css/globals.css";
import { Analytics } from "@vercel/analytics/react";

const googlesans = googleSans({
  src: "../../public/fonts/googlesans-regular.woff2",
});

export const metadata: Metadata = {
  title: "Google Developer Student Clubs USeP Obrero",
  description:
    "Official website of Google Developer Student Clubs USeP Obrero chapter. Google Developer Student Clubs USeP Obrero is an accredited student-run organization whose members are driven to learn Google developer technologies, improve skills in a peer-to-peer learning environment and foster a community of like-minded individuals who are passionate in technology, innovation, and growth.",
  creator: "John Roice Aldeza",
  authors: [
    { name: "John Roice Aldeza", url: "https://roice.xyz" },
    { name: "Vincent Dialing" },
    { name: "Kimzie Torres" },
    { name: "Alexander Vaugn Villasis" },
    { name: "Keziah Mariz Bante" },
    { name: "Jaime Emanuel Lucero" },
    { name: "Jivin Java" },
  ],
  generator: "Next.js",
  applicationName: "GDSC USeP Obrero Website",
  keywords: [
    "GDSC",
    "GDSC USeP Obrero",
    "Google Developer Student Clubs",
    "Google Developer Student Clubs USeP Obrero",
    "USeP Obrero",
    "University of Southeastern Philippines",
    "Google",
    "Google Developer",
    "Google Developer Technologies",
    "Google Developer Technologies Learning",
    "Google Developer Technologies Improvement",
    "Peer-to-Peer Learning",
    "Community",
    "Technology",
    "Innovation",
    "Growth",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${googlesans.className} text-black min-h-full`}>
      <body className="flex flex-col min-h-screen">
        <StickyNavbar />
        <div className="flex-grow my-8">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
