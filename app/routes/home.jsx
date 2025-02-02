import { Outlet } from "@remix-run/react";
import HomeCards from "../components/cards/homeCards";
import commercial from "../images/commercial-aquarium.jpg"
import residential from "../images/home-aquarium.jpg"

export default  function Home(){
    return (
        <>
        <section className="w-[1140px] min-h-svh mx-auto mb-8 flex flex-col justify-center items-center">
        <h2 className="h-12 font-sans font-bold text-4xl text-[#1f2937]">CUSTOM AQUARIUM</h2>
        <div className="text-center w-24 py-2 border-b-2 border-red-700 flex-col lg:flex-row "></div>
        <section className="flex  justify-center">
        <div className="w-full h-72 flex lg:flex-row justify-between p-3" >
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
        </div>
        </section>
        </section>
        </>
    )
}