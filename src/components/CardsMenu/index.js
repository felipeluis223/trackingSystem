export const CardsItemsMenu = ({fn, name, icon})=>{
    return(
        <div 
            className="w-[90%] h-[50px] flex flex-row items-center pl-[15px] text-[#ffffff] hover:text-[#0EA5E9] mt-[30px] hover:border-b-[1px] hover:border-sky-500 duration-100 "
            onClick={fn}
        >
            <div style={{fontSize: 20, marginRight: 5}}>
                {icon}
            </div>
            
            <span className="text-lg">{name}</span>
        </div>
    )
}