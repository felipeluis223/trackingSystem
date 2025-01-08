export const ProfileItems = ({icon, title}) => (
    <div className="w-full sm:w-[200px] h-[40px] flex items-center hover:border-b-2 hover:border-b-yellow-400 duration-100 mt-[5px]">
        <div className="mr-[8px]" style={{color: "#ffffff", fontSize: 18}}> 
            {icon}
        </div>
        <span className="text-sm text-[#ffffff]">{title}</span>
    </div>
);