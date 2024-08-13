import { Button } from "@/components/client-wrapper";
import SectionContainer from "@/containers/SectionContainer";
import Image from "next/image";

import ScrapedEventType from "@/types/scrapedEventType";
import Link from "next/link";
import DataCamp from "../../public/images/datacamp.png";
import GDSC from "../../public/images/gdsc-centered.png";
import Join from "../../public/images/about-cover.png";
import logo from "/public/images/gdsc.png";
import eagle from "/public/images/eagle.png";

export default async function Home() {
  const res = await fetch(`${process.env.APP_URL}/api/events`, {
    cache: "no-store",
  });

  const recentEventScrapedContent:
    | { status: number; events: ScrapedEventType[] }
    | undefined = await res.json();

  return (
    <main>
      <SectionContainer>
        <div className=" bg-[url(/images/eagle.png)] relative lg:bg-none path px-2 flex flex-col items-end justify-end bg-cover bg-no-repeat bg-[90%] sm:bg-[120%] mt-12"
        >
          <Image
            src={eagle}
            alt="USeP Eagle Statue"
            className="absolute w-full object-cover lg:object-contain lg:object-left hidden lg:block"
            fill
            placeholder="blur"
            style={{ left: "-200px" }}
          />
          <div className="text-right z-10 h-fit pt-40">
            <Image
              src={logo}
              height={40}
              alt="GDSC Logo"
              className="hidden md:block w-auto ml-auto self-start mb-12"
            />
            <div className="flex flex-col text-5xl md:text-6xl font-bold mb-4">
              <span>Grow</span>
              <span>Learn</span>
              <span>Connect</span>
            </div>
            <p className="ml-auto w-[200px] md:w-[260px] lg:w-[300px] text-sm sm:text-md lg:text-lg mb-4">
              <b>GDSC USeP Obrero</b> is part of a global community run by
              students from USeP Obrero.
            </p>
            <Link href={"/about"}>
              <Button className="bg-blue" size="lg">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="px-2">
        <div className="flex justify-end my-16">
          <div className="w-2/3 md:w-2/5 flex gap-4">
            <div className="border-2 border-blue-mute w-1/5 h-4 rounded-full "></div>
            <div className="bg-blue-mute w-4/5 h-4 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-14 mt-16 lg:flex-row">
          <div className="max-w-xl">
            <p className="text-3xl font-black lg:text-4xl mb-6">
              What are Google Developer Student Clubs?
            </p>
            <p>
              <span className="font-bold">
                Google Developer Student Clubs (GDSC)
              </span>{" "}
              are community groups for college and university students
              interested in Google developer technologies. By joining a GDSC,
              students grow their knowledge in a peer-to-peer learning
              environment and build solutions for local businesses and their
              community.
            </p>
          </div>

          <div className="w-full max-w-2xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UGE13GR9_CU?si=Y-uBJ_So_sAf-hCh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="px-2">
        <div className="w-2/3 md:w-2/5 flex gap-4 my-24">
          <div className="bg-red-mute w-4/5 h-4 rounded-full"></div>
          <div className="border-2 border-red-mute w-1/5 h-4 rounded-full "></div>
        </div>

        <p className="text-center text-3xl font-bold text-black lg:text-4xl">
          Our Recent Events
        </p>

        {!recentEventScrapedContent && <p>Failed to fetch data.</p>}
        {recentEventScrapedContent && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 my-12">
            {recentEventScrapedContent.events.map((event, index) => (
              <div
                key={index}
                className="text-center flex flex-col justify-start items-center gap-6"
              >
                <Link
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    priority
                    src={event.imageUrl}
                    alt={event.name}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </Link>
                <div className="text-center">
                  <Link
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg font-bold hover:underline">
                      {event.name}
                    </h3>
                  </Link>

                  <p className="text-sm">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center">
          <Link href={"/events"}>
            <Button className="bg-red" size="lg">
              Event Highlights
            </Button>
          </Link>
        </div>
      </SectionContainer>

      <SectionContainer className="px-2">
        <div className=" bg-cover bg-no-repeat bg-none sm:bg-[url('/images/datacamp-bg.png')]">
          <div className="w-2/3 md:w-2/5 flex ml-auto gap-4 my-24 ">
            <div className="border-2 border-green-mute w-1/5 h-4 rounded-full "></div>
            <div className="bg-green-mute w-4/5 h-4 rounded-full"></div>
          </div>
          <div className="flex flex-col items-center gap-10">
            <p className="text-center text-3xl font-black lg:text-4xl">
              GDSC USeP Obrero is an official <br />{" "}
              <span className="text-[#03ef64]">DataCamp Donates</span> Partner
            </p>
            <p className="text-center max-w-xl">
              Through DataCamp Donates, GDSC USeP Obrero is able to spread data
              education to students in the University of Southeastern
              Philippines and beyond.
            </p>
            <div className="flex flex-col justify-center items-center gap-10 py-10 w-4/5 md:flex-row">
              <Image
                src={DataCamp}
                width={300}
                alt="DataCamp"
                placeholder="blur"
              ></Image>
              <span className="text-xl">X</span>
              <Image
                src={GDSC}
                width={300}
                alt="GDSC"
                placeholder="blur"
              ></Image>
            </div>
            <Link href={"https://datacamp.com/donates"} target="_blank">
              <Button className="bg-green" size="lg">
                Learn More About DataCamp Donates
              </Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="px-2">
        <div className="flex justify-end my-24">
          <div className="w-2/3 md:w-2/5 flex gap-4 mr-auto">
            <div className="bg-yellow-mute w-4/5 h-4 rounded-full"></div>
            <div className="border-2 border-yellow-mute w-1/5 h-4 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <p className="text-center text-3xl font-black lg:text-4xl">
            Join Our Community!
          </p>
          <Image src={Join} width={1000} alt="GDSC" placeholder="blur"></Image>

          <p className="text-center max-w-2xl">
            Join GDSC USeP Obrero today and become part of a vibrant community
            that is driven by curiosity, collaboration, and a shared love for
            technology. Together, we&apos;l explore new frontiers, create
            innovative solutions, and make a positive impact in the world.
          </p>

          <Link
            href={
              "https://gdsc.community.dev/university-of-southeastern-philippines-davao-philippines"
            }
            target="_blank"
          >
            <Button className="bg-yellow" size="lg">
              Join us on Bevy!
            </Button>
          </Link>
        </div>
      </SectionContainer>
    </main>
  );
}
