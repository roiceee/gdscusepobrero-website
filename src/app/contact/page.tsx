import SectionContainer from "@/containers/SectionContainer";
import { PhoneInTalkIcon, EmailIcon, LocationOnIcon } from "@/components/client-wrapper";
import Image from "next/image";

const contactDetails = [
    {
        icon: <PhoneInTalkIcon />,
        text: "+123456789",
    },
    {
        icon: <EmailIcon />,
        text: "gdsc@usep.edu.ph",
    },
    {
        icon: <LocationOnIcon />,
        text: "Bo. Obrero, Davao City, University of Southeastern Philiippines - Obrero Campus",
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
    {
        icon: "/images/contact/website.svg",
        alt: "Website",
        url: "https://www.gdscusep.com/",
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

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-left mb-14">
                    We are open for sponsorships and collaborations!
                </h1>

                <p className="text-small sm:text-lg text-left md:max-w-lg mb-14 text-justify">
                    The Google Developer Student Club (GDSC) at the University of Southeastern Philippines - Obrero is dedicated to
                    fostering a collaborative and innovative community. We offer workshops, events, and networking opportunities
                    for students interested in technology and development. Join us in our mission to build and develop skills that
                    will empower students to solve real-world problems.
                </p>

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
                        For inquiries and more information about our events, sponsorship opportunities,
                        and collaborations, please reach out to us using the contact details below.
                    </p>

                    <div>
                        {contactDetails.map((detail, index) => (
                            <div key={index} className="flex items-center mt-8 text-xs xs:text-md sm:text-lg">
                                <div className="w-12">{detail.icon}</div>
                                <div>{detail.text}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row gap-2">
                        {links.map((link, index) => (
                            <a key={index} href={link.url} rel="noopener noreferrer" target="_blank">
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