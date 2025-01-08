export const ProfileSigla = ({sigla, name, email})=>(
    <>
        <div className="w-[140px] h-[140px] bg-[#1f1f1f] rounded-full flex justify-center items-center">
            <h2 className="text-3xl text-[#ffff00f7]">{sigla}</h2>
        </div>
        <div className="w-full h-[80px] flex flex-col justify-center items-center">
            <h3 className="text-lg text-[#ffffff]">{name}</h3>
            <h5 className="text-lg text-[#C0C0C0]">{email}</h5>
        </div>
    </>
);