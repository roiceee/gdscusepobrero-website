import DropDown from "@/components/drop-down";
import OfficerCard from "@/components/officer-card";
import SectionContainer from "@/containers/SectionContainer";

const lead: OfficerType = {
  name: "John Roice Aldeza",
  position: "Lead",
  imageSrc: "https://via.placeholder.com/150",
  links: {
    website: "https://roice.xyz",
    linkedin: "https://www.linkedin.com/in/johnroicealdeza/",
    github: "https://github.com/roiceee",
  },
};

const technology: OfficerType[] = [
  {
    name: "Alexander Vaugn Villasis",
    position: "Chief Technology Officer",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Kent Cyril Bordios",
    position: "Data Science Lead",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Jaime Emmanuel Lucero",
    position: "Design Lead",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Philip Greg Candelario",
    position: "Engineering Lead",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
];

const creatives: OfficerType[] = [
  {
    name: "Keziah Mariz Bante",
    position: "Chief Creatives Officer",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Karla Katrina Leduna",
    position: "Documentations Manager",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Vincent Dialing",
    position: "Branding Manager",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Giverphine Dejiga",
    position: "Promotions Manager",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Reymart Manaytay",
    position: "Branding Manager",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
];

const finance: OfficerType[] = [
  {
    name: "Rey Helorentino",
    position: "Chief Finance Officer",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Kimzie Torres",
    position: "Partnership Manager",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
];

const operations: OfficerType[] = [
  {
    name: "Yman Rey Fernandez",
    position: "Chief Operations Officer",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },

  {
    name: "Jivin Java",
    position: "Logistics Manager",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Prince Paolo Arieta",
    position: "Communications Manager",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Krishna Laureto",
    position: "Secretary",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Lindsay Cañete",
    position: "Events Manager",
    imageSrc: "https://via.placeholder.com/150",
    links: {
      website: "",
      linkedin: "",
      github: "",
    },
  },
];

const adviser: OfficerType = {
  name: "Nancy Mozo",
  position: "Adviser",
  imageSrc: "https://via.placeholder.com/150",
  links: {
    website: "",
    linkedin: "",
    github: "",
  },
};

export default function Page() {
  return (
    <main>
      <SectionContainer className="px-2">
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
        <section className="my-20">
          <div className="w-full sm:w-100"></div>
          <h1 className="text-3xl font-bold text-center">Lead</h1>
          <div className="mt-4">
            <OfficerCard data={lead} className="mx-auto" />
          </div>
        </section>
        <section className="my-20">
          <div className="flex items-center justify-start space-x-2 sm:space-x-2 sm:space-y-0">
            <div className="bg-yellow bg-opacity-65 w-full h-5 rounded-full"></div>
            <div className="w-30"></div>
            <h1 className="text-3xl font-bold text-center">Technology</h1>
            <div className="w-full sm:w-100"></div>
          </div>
          <div>
            <h2 className="text-md my-6 text-center">
              Manages the organization&apos;s tech-related affairs, handling
              tasks that require knowledge of technology and programming.
            </h2>
          </div>
          <div className="flex gap-[24px] flex-wrap mx-auto justify-center">
            {technology.map((officer, index) => (
              <OfficerCard key={"tech-" + index} data={officer} />
            ))}
          </div>
        </section>
        <section className="my-20">
          <div className="flex items-center justify-end space-x-2 sm:space-x-2 sm:space-y-0">
            <div className="w-full sm:w-100"></div>
            <div className="w-30"></div>
            <h1 className="text-3xl font-bold text-center">Creatives</h1>
            <div className="bg-green bg-opacity-70 w-full h-5 rounded-full"></div>
          </div>
          <div>
            <h2 className="text-md my-6 text-center">
              Responsible for creating visual content to convey the
              organization&apos;s message effectively. They design materials for
              marketing, advertising, and multimedia projects.
            </h2>
          </div>
          <div className="flex gap-[24px] flex-wrap mx-auto justify-center max-w-[700px]">
            {creatives.map((officer, index) => (
              <OfficerCard key={"creative-" + index} data={officer} />
            ))}
          </div>
        </section>
        <section className="my-20">
          <div className="flex items-center justify-start space-x-2 sm:space-x-2 sm:space-y-0">
            <div className="bg-blue bg-opacity-70 sm:w-20 h-5 rounded-full"></div>
            <div className="w-30"></div>
            <div className="bg-blue w-full h-5 rounded-full"></div>
            <h1 className="text-3xl font-bold text-center">Finance</h1>
            <div className="w-full sm:w-100"></div>
          </div>
          <div>
            <h2 className="text-md my-6 text-center">
              Manages the organization&apos;s finances, including budgeting and
              transactions They prepare financial reports and ensure compliance.
            </h2>
          </div>
          <div className="flex gap-[24px] flex-wrap mx-auto justify-center">
            {finance.map((officer, index) => (
              <OfficerCard key={"finance-" + index} data={officer} />
            ))}
          </div>
        </section>
        <section className="my-20">
          <div className="flex items-center justify-end space-x-2 sm:space-x-2 sm:space-y-0">
            <div className="w-full sm:w-100"></div>
            <div className="w-30"></div>
            <div className="bg-yellow bg-opacity-70 w-40 h-5 rounded-full"></div>
            <h1 className="text-3xl font-bold text-center">Operations</h1>
            <div className="bg-red bg-opacity-70 w-full h-5 rounded-full"></div>
          </div>
          <div>
            <h2 className="text-md my-6 text-center">
              Oversees day-to-day functions, event management, ad hoc projects,
              recruitment, and member welfare, ensuring smooth operations and a
              positive organizational culture.
            </h2>
          </div>
          <div className="flex gap-[24px] flex-wrap mx-auto justify-center max-w-[700px]">
            {operations.map((officer, index) => (
              <OfficerCard key={"operations-" + index} data={officer} />
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-start space-x-2 sm:space-x-2 sm:space-y-0">
            <div className="bg-green bg-opacity-70 sm:w-20 h-5 rounded-full"></div>
            <div className="w-30"></div>
            <div className="bg-green w-full h-5 rounded-full"></div>
            <h1 className="text-3xl font-bold text-center">Adviser</h1>
            <div className="w-full sm:w-100"></div>
          </div>
          <OfficerCard data={adviser} className="mx-auto mt-6" />
        </section>
      </SectionContainer>
    </main>
  );
}
