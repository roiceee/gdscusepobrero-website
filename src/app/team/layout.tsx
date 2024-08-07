import DropDown from "@/components/drop-down";
import SectionContainer from "@/containers/SectionContainer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SectionContainer>
        <section className="text-center">
          <h1 className="text-4xl font-bold">Meet Our Team</h1>
          <h2 className="text-md m-2">
            The passionate individuals behind GDSC USeP Obrero, dedicated to
            establishing and nurturing a thriving tech community.
          </h2>
          <div className="mt-4 mb-20">
            <DropDown />
          </div>
        </section>
        {children}
      </SectionContainer>
    </div>
  );
}
