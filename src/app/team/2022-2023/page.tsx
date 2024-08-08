import OfficerCard from "@/components/officer-card";
import {
  adviser,
  humanResource,
  financeAndExternals,
  ceo,
  communications,
  lead,
  operations,
  technology,
} from "@/data/officers/firstTerm";

export default function Page() {
  return (
    <main>
      <section className="my-20">
        <div className="sm:flex justify-center gap-[24px]">
          <div>
            <h1 className="text-3xl font-bold text-center">Lead</h1>
            <div className="mt-4">
              <OfficerCard data={lead} className="mx-auto" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center">CEO</h1>
            <div className="mt-4">
              <OfficerCard data={ceo} className="mx-auto" />
            </div>
          </div>
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
            Manages the organization&apos;s tech-related affairs, handling tasks
            that require knowledge of technology and programming.
          </h2>
        </div>
        <div className="flex gap-[24px] flex-wrap mx-auto justify-center max-w-[800px]">
          {technology.map((officer, index) => (
            <OfficerCard key={"tech-" + index} data={officer} />
          ))}
        </div>
      </section>
      <section className="my-20">
        <div className="flex items-center justify-end space-x-2 sm:space-x-2 sm:space-y-0">
          <div className="w-full sm:w-100"></div>
          <div className="w-30"></div>
          <h1 className="text-3xl font-bold text-center">Communications</h1>
          <div className="bg-green bg-opacity-70 w-full h-5 rounded-full"></div>
        </div>
        <div>
          <h2 className="text-md my-6 text-center">
            Responsible for conveying the organization&apos;s message
            effectively. They design materials for marketing, advertising, and
            multimedia projects.
          </h2>
        </div>
        <div className="flex gap-[24px] flex-wrap mx-auto justify-center max-w-[1200px]">
          {communications.map((officer, index) => (
            <OfficerCard key={"creative-" + index} data={officer} />
          ))}
        </div>
      </section>
      <section className="my-20">
        <div className="flex items-center justify-start space-x-2 sm:space-x-2 sm:space-y-0">
          <div className="bg-blue bg-opacity-70 sm:w-20 h-5 rounded-full"></div>
          <div className="w-30"></div>
          <div className="bg-blue w-full h-5 rounded-full"></div>
          <h1 className="text-3xl font-bold text-center">
            Finance and Externals
          </h1>
          <div className="w-full sm:w-100"></div>
        </div>
        <div>
          <h2 className="text-md my-6 text-center">
            Manages the organization&apos;s finances, including budgeting and
            transactions They prepare financial reports and ensure compliance.
          </h2>
        </div>
        <div className="flex gap-[24px] flex-wrap mx-auto justify-center">
          {financeAndExternals.map((officer, index) => (
            <OfficerCard key={"finance-" + index} data={officer} />
          ))}
        </div>
      </section>
      <section className="my-20">
        <div className="flex items-center justify-end space-x-2 sm:space-x-2 sm:space-y-0">
          <div className="w-full sm:w-100"></div>
          <div className="w-30"></div>
          <div className="bg-red-mute bg-opacity-70 w-40 h-5 rounded-full"></div>
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
        <div className="flex gap-[24px] flex-wrap mx-auto justify-center max-w-[1200px]">
          {operations.map((officer, index) => (
            <OfficerCard key={"operations-" + index} data={officer} />
          ))}
        </div>
      </section>
      <section className="my-20">
        <div className="flex items-center justify-start space-x-2 sm:space-x-2 sm:space-y-0">
          <div className="bg-blue bg-opacity-70 sm:w-20 h-5 rounded-full"></div>
          <div className="w-30"></div>
          <div className="bg-blue w-full h-5 rounded-full"></div>
          <h1 className="text-3xl font-bold text-center">Human Resource</h1>
          <div className="w-full sm:w-100"></div>
        </div>
        <div></div>
        <div className="my-6">
          <OfficerCard data={humanResource} className="mx-auto" />
        </div>
      </section>
      <section>
        <div className="flex items-center justify-end space-x-2 sm:space-x-2 sm:space-y-0">
          <div className="w-full sm:w-100"></div>
          <h1 className="text-3xl font-bold text-center">Adviser</h1>
          <div className="bg-green bg-opacity-70 sm:w-20 h-5 rounded-full"></div>
          <div className="w-30"></div>
          <div className="bg-green w-full h-5 rounded-full"></div>
        </div>
        <OfficerCard data={adviser} className="mx-auto mt-6" />
      </section>
    </main>
  );
}
