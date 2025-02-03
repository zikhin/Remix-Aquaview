export default function HomeCards(props){
    return(
        <>
        <div className="flex flex-col w-full lg:h-auto md:h-[40%] sm:h-[40%] ">
        <img className="lg:w-[90%] shadow-md lg:h-[80%] h-[60%] w-[80%] mx-auto  object-fill rounded-lg" src={props.imgSrc} alt={props.imgAtl}/>
        <div className="w-full lg:h-[40%] h-[20%] lg:px-7 lg:pb-10 lg:mb-3">
        <h4 className="text-center h-6 mb-3 text-[#1f2937] font-semibold text-lg">{props.title}</h4>
        <p className="text-center text-[#4b5563 ] font-normal text-base" >{props.description}</p>
        </div>
        </div>
        </>
        )
    }

