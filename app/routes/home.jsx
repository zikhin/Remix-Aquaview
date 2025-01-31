import { Outlet } from "@remix-run/react";
import HomeCards from "../components/cards/homeCards";
import commercial from "../images/commercial-aquarium.jpg"
import residential from "../images/home-aquarium.jpg"
import homeImage from "../images/home-image.jpg"

export default  function Home(){
    return (
        <>
        <section >
            <img className="w-svh h-svh lg:w-dvw lg:h-dvh "src={homeImage} atl="home image"  />
            <section/>
        </section>
        <section className="w-[1140px] h-[650px] mx-16 py-24 flex flex-col border-2 border-black  justify-center items-center">
        <h2 className="h-12 font-sans font-bold text-4xl">CUSTOM AQUARIUM</h2>
        <div className="text-center w-24 py-2 border-b-2 border-red-700 flex-col lg:flex-row "></div>
        <section className="flex ">
        <HomeCards 
            title="RESIDENTIAL AQUARIUM" 
            description="Residential Aquarium: Indoor with Standard Sizes Range from 2 1/2 to 250 gallons" 
            imgSrc={residential} 
            imgAtl="RESIDENTIAL AQUARIUM"/>
            <HomeCards 
            title="COMMERCIAL AQUARIUM" 
            description="Commercial Aquarium: Office Aquarium,Hotel Aquarium,Hospital Aquarium" 
            imgSrc={commercial} 
            imgAtl="COMMERCIAL AQUARIUM"/>        </section>
        </section>
        </>
    )
}



/*
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
 */

            /*
            <section >    
            <div className="flex justify-center items-center text-center flex-col mb-8"> 
            <h2 className="w-full h-11 flex justify-center items-center text-center font-sans font-bold text-4xl">CUSTOM AQUARIUM</h2>
            <span className="text-center w-28 px-3 border-b-2 border-red-500 "></span>
            </div>
        </section>
        <section className="flex  justify-center">
        <div className="w-full h-72 flex lg:flex-row justify-between p-3 " >
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
        <button>contact us</button>
        </section>
            */