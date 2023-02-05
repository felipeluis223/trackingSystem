import { BsPersonFill } from 'react-icons/bs';

function Card({ name, email, profession, phone }){
    return (
        <section className="w-[280px] min-h-[350px] bg-[#242424] rounded-md flex flex-col items-center m-[20px]">
            <div className="w-[120px] h-[120px] rounded-full bg-[#1f1f1f] flex justify-center items-center mt-[20px] text-[#C0C0C0]">
                <BsPersonFill style={{fontSize: 40}} />
            </div>
            <div className="w-[90%] h-[200px] bg-[#1f1f1f] m-[10px] rounded-md p-[10px] flex flex-col justify-center items-center">
                <h2 className="text-xl text-center text-[#ffffff] mb-[30px]">{profession}</h2>
                <h3 className="text-sm text-center text-[#C0C0C0] font-bold">{name}</h3>
                <h2 className="text-xs text-center text-[#C0C0C0] font-bold">{email}</h2>
                <h2 className="text-xs text-center text-[#C0C0C0] font-bold">{phone}</h2>
            </div>
        </section>
    )
}
export default Card;