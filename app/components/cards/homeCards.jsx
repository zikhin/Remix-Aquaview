export default function HomeCards(props){
    return(
        <>
        <div className="w-[560px] h-[480px] flex flex-col p-3 justify-center border-black ">
        <img className="w-[520px] h-[300px] rounded-sm pb-10" src={props.imgSrc} alt={props.imgAtl}/>
        <div className="w-full h-[115] px-7 pb-10 mb-3">
        <h4 className="text-center">{props.title}</h4>
        </div>
        <p className="text-center" >{props.description}</p>
        <button className="w-16 h-12 bg-red-400 rounded-full">click</button>
        </div>
        </>
        )
    }
