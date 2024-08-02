import SectionContainer from "@/containers/SectionContainer";
import { Button } from "@/components/client-wrapper";
import Image from "next/image";
import WhatareGDSC from "../../public/images/whataregdsc.png";
import DataCamp from "../../public/images/datacamp.png";
import GDSC from "../../public/images/gdsc-centered.png";
import Join from "../../public/images/JoinOurCommunity.png";

export default function Home() {
  return (
    <main>
      <SectionContainer>
        <div
          className="px-2 flex flex-col items-end justify-end gap-4 w-full bg-cover bg-no-repeat bg-bottom-right bg-[90%] h-[80vh] md:bg-contain md:bg-[-140%]  xl:bg-[-90%]"
          style={{ backgroundImage: "url(/images/eagle.png)" }}
        >
          <div className="flex flex-col text-right text-2xl xl:text-3xl  font-extrabold">
            <span>Grow</span>
            <span>Learn</span>
            <span>Connect</span>
          </div>

          <p className="w-2/5 md:w-[200px] lg:w-[260px] text-xs xl:text-sm text-right">
            The <b>GDSC USeP Obrero</b> is part of a global community run by
            students from USeP Obrero.
          </p>

          <div className="flex justify-end pb-6">
            <Button className="bg-blue">About Us</Button>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="w-2/4 flex gap-4">
          <div className="bg-red w-4/5 h-4 rounded-full"></div>
          <div className="border-2 border-red w-1/5 h-4 rounded-full "></div>
        </div>

        <p className="text-center py-10 text-3xl font-black lg:text-4xl">
          Our Past <br /> Events
        </p>
      </SectionContainer>

      <SectionContainer>
        <div className="flex justify-end">
          <div className="w-2/5 flex gap-4">
            <div className="border-2 border-blue w-1/5 h-4 rounded-full "></div>
            <div className="bg-blue w-4/5 h-4 rounded-full"></div>
          </div>
        </div>

        <p className="text-center py-10 text-3xl font-black lg:text-4xl">
          What are <br /> Google Developer Student Clubs?
        </p>

        <div className="flex flex-col-reverse items-center justify-center gap-14 py-16 lg:flex-row">
          <p className="text-center max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="w-full max-w-md aspect-video">
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

      <SectionContainer>
        <div className="w-2/5 flex gap-4">
          <div className="bg-green w-4/5 h-4 rounded-full"></div>
          <div className="border-2 border-green w-1/5 h-4 rounded-full "></div>
        </div>

        <div className="flex flex-col items-center gap-10 py-10">
          <p className="text-center text-3xl font-black lg:text-4xl">
            GDSC USeP Obrero is official <br /> DataCamp Donates Partner
          </p>

          <p className="text-center max-w-xl">
            Explore how our joint efforts are driving change and making a real
            difference. Together, we&apos;re transforming lives and communities.
          </p>

          <div className="flex flex-col justify-center items-center gap-10 py-10 w-4/5 md:flex-row">
            <Image src={DataCamp} width={300} alt="DataCamp"></Image>
            <span className="text-xl">X</span>
            <Image src={GDSC} width={300} alt="GDSC"></Image>
          </div>

          <Button className="bg-red">Learn More</Button>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="flex justify-end">
          <div className="w-2/5 flex gap-4">
            <div className="border-2 border-yellow w-1/5 h-4 rounded-full"></div>
            <div className="bg-yellow w-4/5 h-4 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 py-10">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
            <p className="text-center text-3xl font-black lg:text-4xl">
              Join Our <br /> Community!
            </p>
            <Image src={Join} width={500} alt="GDSC"></Image>
          </div>

          <p className="text-center max-w-md">
            Join GDSC USEP Obrero today and become part of a vibrant community
            that is driven by curiosity, collaboration, and a shared love for
            technology. Together, we&apos;l explore new frontiers, create
            innovative solutions, and make a positive impact in the world.
          </p>

          <Button className="bg-yellow">Meet the Team</Button>
        </div>
      </SectionContainer>
    </main>
  );
}
