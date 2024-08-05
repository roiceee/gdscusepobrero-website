import SectionContainer from "@/containers/SectionContainer";
import Image from "next/image";
import Link from "next/link";
import cover from "/public/images/about-cover.png";

const data: { name: string; url: string; imageSrc: string }[] = [
  {
    name: "John Roice Aldeza",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Vincent Dialing",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Alexander Vaugn Villasis",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Kimzie Torres",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Jaime Emanuel Lucero",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Keziah Bante",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Jib Java",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
];

export default function Page() {
  return (
    <main>
      <SectionContainer className="px-2">
        <h1 className="text-4xl font-bold text-center">About</h1>

        {/* <section className="my-6">
          <Image
            src={cover}
            height={400}
            width={1600}
            alt=""
            className="rounded-xl"
          />
        </section> */}

        <section className="mt-12">
          <div className="flex items-center justify-start">
            <div className="bg-yellow w-full h-5 rounded-full"></div>
            <div className="w-full"></div>
          </div>

          <div className="lg:flex items-center my-4">
            <h2 className="font-semibold text-3xl lg:text-5xl lg:text-center">
              What is <span className="text-red">G</span>
              <span className="text-blue">D</span>
              <span className="text-yellow">S</span>
              <span className="text-green">C</span> USeP Obrero?
            </h2>
            <Image
              src={cover}
              width={800}
              alt=""
              className="rounded-xl h-auto w-full"
            />
          </div>

          <div className="flex items-center justify-start">
            <div className="w-full sm:w-100"></div>
            <div className="bg-green w-full lg:w-1/2 h-5 rounded-full"></div>
          </div>

          <p className="mt-8">
            <span className="font-bold">
              Google Developer Student Clubs USeP Obrero
            </span>{" "}
            is an accredited student-run organization whose members are driven
            to learn Google developer technologies, improve skills in a
            peer-to-peer learning environment and foster a community of
            like-minded individuals who are passionate in technology,
            innovation, and growth.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-semibold text-2xl mb-4">What do we do?</h2>
          <ul className="list-disc px-8">
            <li>
              Cultivate and support the tech community at the University of
              Southeastern Philippines Obrero Campus
            </li>
            <li>Workshops</li>
            <li>Tech Talks</li>
            <li>Collaborative Projects</li>
          </ul>
        </section>

        <div className="bg-blue w-1/2 lg:w-1/3 rounded-full h-5 my-12"></div>

        <section className="mt-12">
          <h2 className="font-semibold text-xl mb-4">Website Team</h2>
          <p>
            Our sincere thanks to the following individuals for contributing to
            this website:
          </p>

          <div className="sm:flex gap-4 flex-wrap">
            {data.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 mt-4"
              >
                <Link
                  href={member.url}
                  rel="
                    noopener noreferrer"
                  target="_blank
                  "
                >
                  <Image
                    src={member.imageSrc}
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </Link>
                <div>
                  <Link
                    href={member.url}
                    rel="
                    noopener noreferrer"
                    target="_blank
                  "
                  >
                    <h3 className="font-bold hover:underline">{member.name}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionContainer>
    </main>
  );
}
