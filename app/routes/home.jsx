import { Outlet } from "@remix-run/react";
import HomeCards from "../components/cards/homeCards";
import commercial from "../images/commercial-aquarium.jpg"
import residential from "../images/home-aquarium.jpg"

export default  function Home(){
    return (
        <>
        <section className="lg:w-[90%] min-w-fit min-h-svh mx-auto mb-8 flex flex-col justify-center items-center">
        <h2 className="h-12 font-sans font-bold text-4xl text-[#1f2937]">CUSTOM AQUARIUM</h2>
        <div className="text-center w-24 py-2 border-b-2 border-red-700 flex-col lg:flex-row "></div>
        <section className="flex mt-4 justify-center lg:w-[80%] lg:h-80 h-[100vh] gap-4 lg:gap-4 flex-col lg:flex-row p-3 columns-2
        border-2 border-black">
        <HomeCards 
        title="RESIDENTIAL AQUARIUM" 
        description="Residential Aquarium: Indoor with Standard Sizes Range from 2 1/2 to 250 gallons" 
            imgSrc={residential} 
            imgAtl="RESIDENTIAL AQUARIUM"/>
        <HomeCards 
            title="COMMERCIAL AQUARIUM" 
            description="Commercial Aquarium: Office Aquarium,Hotel Aquarium,Hospital Aquarium" 
            imgSrc={commercial} 
            imgAtl="COMMERCIAL AQUARIUM"/>
        </section>
        <section className="relative bg-[url(../../public/homepage-background.jpg)] -[600px] h-[300px] border-2">
        <div className="absolute">
        <p>Hello inner text</p>
        </div>
        </section>
        </section>
        </>
    )
}