import { Button } from "@/components/client-wrapper";
import Gallery from "@/components/gallery";
import SectionContainer from "@/containers/SectionContainer";
import Image from "next/image";
import Link from "next/link";
import ScrapedEventType from "../../types/scrapedEventType";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Stay updated with the latest events from Google Developer Student Clubs USeP Obrero.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gdscusep.com/events",
    siteName: "Events - Google Developer Student Clubs USeP Obrero",
    title: "Events - Google Developer Student Clubs USeP Obrero",
    description:
      "Stay updated with the latest events from Google Developer Student Clubs USeP Obrero.",
  },
};

export default async function Page() {
  const res = await fetch(`${process.env.APP_URL}/api/events`, {
    cache: "no-store",
  });

  const recentEventScrapedContent:
    | { status: number; events: ScrapedEventType[] }
    | undefined = await res.json();

  const linkToBevy =
    "https://gdsc.community.dev/university-of-southeastern-philippines-davao-philippines/";

  return (
    <main>
      <SectionContainer className="px-2">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Events</h1>
          <Link
            href={linkToBevy}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue"
          >
            Join us on Bevy!
          </Link>
        </section>

        <div className="flex justify-start gap-4 items-center">
          <div className="bg-red-mute bg-opacity-65 w-1/2 lg:w-1/3 h-5 my-8 rounded-full"></div>
          <div className="bg-red bg-opacity-65 w-[30px] h-5 rounded-full"></div>
        </div>

        <section>
          <h2 className="text-2xl mb-8 font-semibold">Recent Events</h2>
          {!recentEventScrapedContent && <p>Failed to fetch data.</p>}
          {recentEventScrapedContent && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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

          <div className="text-center mt-12">
            <Link href={linkToBevy} target="_blank" rel="noopener noreferrer">
              <Button className="bg-maroon px-12 text-md">
                View More on Bevy!
              </Button>
            </Link>
          </div>
        </section>

        <div className="flex justify-end gap-4 items-center">
          <div className="bg-yellow bg-opacity-65 w-[30px] h-5 rounded-full"></div>
          <div className="bg-yellow-mute bg-opacity-65 w-1/2 lg:w-1/3 h-5 my-8 rounded-full"></div>
        </div>

        <section>
          <h2 className="text-2xl mb-8 font-semibold">Event Highlights</h2>
          <Gallery />
        </section>
      </SectionContainer>
    </main>
  );
}
