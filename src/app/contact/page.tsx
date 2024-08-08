import { EmailIcon, LocationOnIcon } from "@/components/client-wrapper";
import SectionContainer from "@/containers/SectionContainer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GDSC USeP Obrero for inquiries, collaborations, and sponsorships.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gdscusep.com/contact",
    siteName: "Contact - Google Developer Student Clubs USeP Obrero",
    title: "Contact - Google Developer Student Clubs USeP Obrero",
    description:
      "Contact GDSC USeP Obrero for inquiries, collaborations, and sponsorships.",
  },
};

const contactDetails = [
  {
    icon: <EmailIcon />,
    text: "gdsc@usep.edu.ph",
    link: "mailto:gdsc@usep.edu.ph",
  },
  {
    icon: <LocationOnIcon />,
    text: "Bo. Obrero, Davao City, University of Southeastern Philiippines - Obrero Campus",
    link: "",
  },
];

const links: { icon: string; alt: string; url: string }[] = [
  {
    icon: "/images/contact/facebook.svg",
    alt: "Facebook",
    url: "https://www.facebook.com/GDSCUSePObrero",
  },
  {
    icon: "/images/contact/linkedin.svg",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/company/gdscusepobrero/",
  },
];

export default function Page() {
  return (
    <main>
      <SectionContainer className="bg-[url('/images/contactbackground.png')] bg-cover px-2 sm:px-10 mb-16">
        <div className="flex items-center justify-start gap-3 pt-16 mb-14">
          <div className="bg-red w-1/2 lg:w-1/4 h-5 rounded-full"></div>
          <div className=" border-red border-2 h-5 rounded-full w-[20px]"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-left mb-14 tracking-wide ">
          We are open for sponsorships and collaborations!
        </h1>

        <div className="mb-14">
          <p className="text-small sm:text-lg md:max-w-lg ">
            GDSC USeP Obrero is dedicated to fostering a collaborative and
            innovative community. We offer workshops, events, and networking
            opportunities for students interested in technology and development.
          </p>
          <p className="font-bold">
            Join us in our mission to build and develop skills that will empower
            students to solve real-world problems.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 mt-14 pb-5">
          <div className=" border-yellow border-2 h-5 rounded-full w-[175px]"></div>
          <div className="bg-yellow w-1/3 lg:w-1/2 h-5 rounded-full"></div>
        </div>
      </SectionContainer>

      <SectionContainer className="px-2 sm:px-10 mt-16">
        <h2 className="text-4xl sm:text-6xl text-center font-bold mb-16">
          Reach Us
        </h2>

        <section className="bg-gradient-to-b from-[#9A0000] to-[#460000] rounded-2xl p-8 lg:p-12 mt-16 max-w-[700px] mx-auto text-white">
          <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
          <p className="mb-6">
            For inquiries and more information about our events, sponsorship
            opportunities, and collaborations, please reach out to us using the
            contact details below.
          </p>

          <div>
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-center mt-8 text-xs xs:text-md sm:text-lg"
              >
                <div className="w-12">{detail.icon}</div>
                {detail.link ? (
                  <a
                    target="_blank"
                    href={detail.link}
                    className="hover:underline"
                    rel="noreferrer noopener"
                  >
                    {detail.text}
                  </a>
                ) : (
                  <p>{detail.text}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={link.icon}
                  width={36}
                  height={36}
                  alt={link.alt}
                  className="rounded-xl mt-8"
                />
              </a>
            ))}
          </div>
        </section>
      </SectionContainer>
    </main>
  );
}
