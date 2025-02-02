export default function HomeCards(props){
    return(
        <>
        <div className="w-[560px] h-[480px] flex flex-col p-3 justify-center">
        <img className=" shadow-sm w-[520px] h-[300px] rounded-lg pb-5 px-5 " src={props.imgSrc} alt={props.imgAtl}/>
        <div className="w-full h-[115] px-7 pb-10 mb-3">
        <h4 className="text-center h-6 mb-3 text-[#1f2937] font-semibold text-lg">{props.title}</h4>
        <p className="text-center text-[#4b5563 ] font-normal text-base" >{props.description}</p>
        </div>
        </div>
        </>
        )
    }
