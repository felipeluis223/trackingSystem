import { TbLogin } from 'react-icons/tb';

export const Logout = ({fn})=>(
    <div 
        className="w-[90%] h-[50px] flex flex-row items-center pl-[15px] text-[#ffffff] hover:text-[#0EA5E9] hover:border-b-[1px] hover:border-sky-500 duration-100 mt-[80px]"
        onClick={fn}
    >
        <TbLogin style={{fontSize: 20, marginRight: 5}} />
        <span className="text-lg">Exit</span>
    </div>
)