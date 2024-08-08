import DropDown from "@/components/drop-down";
import SectionContainer from "@/containers/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The amazing individuals behind GDSC USeP Obrero, dedicated to establishing and nurturing a thriving tech community.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gdscusep.com/team",
    siteName: "Google Developer Student Clubs USeP Obrero",
    title: "Team - Google Developer Student Clubs USeP Obrero",
    description:
      "The amazing individuals behind GDSC USeP Obrero, dedicated to establishing and nurturing a thriving tech community.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SectionContainer className="px-1">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Meet Our Team</h1>
          <h2 className="text-md m-2">
            The amazing individuals behind GDSC USeP Obrero, dedicated to
            establishing and nurturing a thriving tech community.
          </h2>
          <div className="mt-4">
            <DropDown />
          </div>
        </section>
        {children}
      </SectionContainer>
    </div>
  );
}
