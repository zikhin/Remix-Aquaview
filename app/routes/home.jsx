import { Outlet } from "@remix-run/react";
import HomeCards from "../components/cards/homeCards";
import commercial from "../images/commercial-aquarium.jpg"
import residential from "../images/home-aquarium.jpg"

export default function Home() {
    return (
        <>
            <section className="lg:w-[90%] min-w-fit min-h-svh mx-auto mb-8 flex flex-col justify-center items-center">
                <h2 className="h-12 font-sans font-bold lg:text-4xl text-[#1f2937] md:text-base sm:text-sm">CUSTOM AQUARIUM</h2>
                <div className="text-center w-24 py-2 border-b-2 border-red-700 flex-col lg:flex-row "></div>
                <section className="flex mt-4 justify-center lg:w-[80%] lg:h-[60%] gap-4 lg:gap-4 flex-col lg:flex-row p-3 columns-2
        border-2 border-black">
                    <HomeCards
                        title="RESIDENTIAL AQUARIUM"
                        description="Residential Aquarium: Indoor with Standard Sizes Range from 2 1/2 to 250 gallons"
                        imgSrc={residential}
                        imgAtl="RESIDENTIAL AQUARIUM" />
                    <HomeCards
                        title="COMMERCIAL AQUARIUM"
                        description="Commercial Aquarium: Office Aquarium,Hotel Aquarium,Hospital Aquarium"
                        imgSrc={commercial}
                        imgAtl="COMMERCIAL AQUARIUM" />
                </section>
                <section className="mb-7 relative bg-fixed bg-home-page bg-no-repeat bg-center bg-cover w-full h-svh border-2">
                    <div className="absolute text-white border-2 border-black right-[10%] top-[50%] w-[30%]">
                        <p className=" font-extrabold lg:text-4xl text-xl">EXPLORE TROPICAL AQUVARIUM</p>
                        <div className="border-b-4 border-[#fb2056] w-24 my-4" ></div>
                        <p>Fish tanks bring a sense of nature and calming into your home ,
                            there by reducing stress levels, Especially in high-stress environments
                            like office spaces, fish tanks have proven to lower stress levels and
                            resulting in healthier employees. And taking care your fish tank is a
                            good way to  reduce stress</p>
                    </div>
                </section>
                <section>
                    <div className="border-3 columns-3 border-black w-[90%] h-svh">
                        <div className=" text-black border-2 border-black w-1/3">
                            <p className=" font-extrabold lg:text-4xl text-xl">Convert Tour Traditional Aquavarium To Planted Aquarium</p>
                            <div className="border-b-4 border-[#fb2056] w-24 my-4" ></div>
                            <p>Planted tanks are a popular and repidly growing segment of the aquarium hobby.
                                one that allows hobbyists to combine the beauty of nature with the benefits of a balanced ecosystem . 
                                unlike a tradition aquarium ,live plants are the primary focus,with fish being an accent or compliment to the overall effect                            </p>
                        </div>
                        <div className="flex flex-col border-black w-1/3 h-svh">
                            <img className="block " src={commercial} alt="" />
                            <img className="block " src={commercial} alt="" />
                        </div>
                        <div className=" border-black w-1/3 h-svh" >
                            <img className="block" src={commercial} alt="comm" />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}