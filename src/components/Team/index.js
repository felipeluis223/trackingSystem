import Card from "./card";
import { members } from "./members";

function ManageTeam(){
    
    return(
        <section className="w-full h-screen flex flex-col items-center">
            <h1 className="w-full pt-[25px] text-center text-4xl text-[#ffff00f7] font-bold">Team Members</h1>
            <section className="w-[90%] p-[20px] bg-[#1f1f1f] mt-[40px] rounded-md flex flex-wrap justify-evenly items-center">
                {
                    members.map((item, index)=>(
                        <Card name={item.name} email={item.email} profession={item.profession} phone={item.phone} key={index} />
                    ))
                }
            </section>
        </section>
    )
}

export default ManageTeam;