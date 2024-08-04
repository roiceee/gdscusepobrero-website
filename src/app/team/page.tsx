import DropDown from "@/components/drop-down";
import SectionContainer from "@/containers/SectionContainer";

export default async function Team() {
    return(
        <main>
            <SectionContainer className="px-2">
                <section className="text-center">
                    <h1 className="text-4xl font-bold">Meet Our Team</h1>
                    <h2 className="text-lg m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h2>
                    <div className="m-4">
                        <DropDown/>
                    </div>
                </section>
                <div className="flex items-center justify-end space-x-2 sm:space-x-2 sm:space-y-0">
                    <div className="w-full sm:w-100"></div>
                    <div className="w-30"></div>
                    <h1 className="text-3xl font-bold text-center">Lead</h1>
                    <div className="bg-red bg-opacity-20 w-full h-5"></div>
                    <div className="w-1"></div>
                    <div className="bg-red bg-opacity-70 sm:w-20 h-5"></div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                    <h2 className="text-xl font-bold text-center">John Roice Aldeza</h2>
                    <p className="text-center text-l">Lead</p>
                </div>
                <div className="flex items-center justify-start space-x-2 sm:space-x-2 sm:space-y-0">
                    <div className="bg-yellow bg-opacity-65 w-full h-5"></div>
                    <div className="w-30"></div>
                    <h1 className="text-3xl font-bold text-center">Technology</h1>
                    <div className="w-full sm:w-100"></div>
                </div>
                <div>
                    <h2 className="text-lg m-2 text-center">The Technology Team manages the organization's tech-related affairs, handling tasks that require knowledge of technology and programming.</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Alexander Vaugn Villasis</h2>
                        <p className="text-center text-l">Chief Technology Officer</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Francis Nathanael De Villena</h2>
                        <p className="text-center text-l">Data Science Lead</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Jaime Emmanuel Lucero</h2>
                        <p className="text-center text-l">Design Lead</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Philip Greg Candelario</h2>
                        <p className="text-center text-l">Engineering Lead</p>
                    </div>
                </div>
                <div className="flex items-center justify-end space-x-2 sm:space-x-2 sm:space-y-0">
                    <div className="w-full sm:w-100"></div>
                    <div className="w-30"></div>
                    <h1 className="text-3xl font-bold text-center">Creatives</h1>
                    <div className="bg-green bg-opacity-70 w-full h-5"></div>
                </div>
                <div>
                    <h2 className="text-lg m-2 text-center">The Creatives Team is responsible for creating visual content to convey the organization's message effectively. They design materials for marketing, advertising, and multimedia projects.</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Keziah Mariz Bante</h2>
                        <p className="text-center text-l">Chief Creatives Officer</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Karla Katrina Leduna</h2>
                        <p className="text-center text-l">Documentations Manager</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Vincent Dialing</h2>
                        <p className="text-center text-l">Branding Manager</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Giverphine Dejiga</h2>
                        <p className="text-center text-l">Promotions Manage</p>
                    </div>

                    <div className="flex flex-col items-center justify-start col-span-2">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Reymart Manaytay</h2>
                        <p className="text-center text-l">Branding Manager</p>
                    </div>
                </div>
                <div className="flex items-center justify-start space-x-2 sm:space-x-2 sm:space-y-0">
                    <div className="bg-blue bg-opacity-70 sm:w-20 h-5"></div>
                    <div className="w-30"></div>
                    <div className="bg-blue w-full h-5"></div>
                    <h1 className="text-3xl font-bold text-center">Finance</h1>
                    <div className="w-full sm:w-100"></div>
                </div>
                <div>
                    <h2 className="text-lg m-2 text-center">The Finance Team manages the organization's finances, including budgeting, transactions, and external relations. They prepare financial reports and ensure compliance.</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Rey Helorentino</h2>
                        <p className="text-center text-l">Chief Finance Officer</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Kimzie Torres</h2>
                        <p className="text-center text-l">Partnership Manager</p>
                    </div>
                </div>
                <div className="flex items-center justify-end space-x-2 sm:space-x-2 sm:space-y-0">
                    <div className="w-full sm:w-100"></div>
                    <div className="w-30"></div>
                    <div className="bg-yellow bg-opacity-70 w-40 h-5"></div>
                    <h1 className="text-3xl font-bold text-center">Operations</h1>
                    <div className="bg-red bg-opacity-70 w-full h-5"></div>
                </div>
                <div>
                    <h2 className="text-lg m-2 text-center">The Operations Team oversees day-to-day functions, event management, ad hoc projects, recruitment, and member welfare, ensuring smooth operations and a positive organizational culture.</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Jivin Java</h2>
                        <p className="text-center text-l">Logistics Manager</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Prince Paolo Arieta</h2>
                        <p className="text-center text-l">Communications Manager</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Yman Rey Fernandez</h2>
                        <p className="text-center text-l">Chief Operations Officer</p>
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Krishna Laureto</h2>
                        <p className="text-center text-l">Secretary</p>
                    </div>

                    <div className="flex flex-col items-center justify-start col-span-2">
                        <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                        <h2 className="text-xl font-bold text-center">Lindsay Cañete</h2>
                        <p className="text-center text-l">Events Manager</p>
                    </div>
                </div>
                <div className="flex items-center justify-start space-x-2 sm:space-x-2 sm:space-y-0">
                    <div className="bg-green bg-opacity-70 sm:w-20 h-5"></div>
                    <div className="w-30"></div>
                    <div className="bg-green w-full h-5"></div>
                    <h1 className="text-3xl font-bold text-center">Adviser</h1>
                    <div className="w-full sm:w-100"></div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-40 h-40 object-cover"/>
                    <h2 className="text-xl font-bold text-center">Nancy Mozo</h2>
                    <p className="text-center text-l">Adviser</p>
                </div>

            </SectionContainer>
        </main>
    );

}