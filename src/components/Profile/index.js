import { BsFillTelephoneFill, BsEnvelopeFill, BsPersonCircle } from 'react-icons/bs';
import { MdHomeWork } from 'react-icons/md';

function Profile(){
    const userData = {
        username: "admin",
        password: "admin1234",
        name: "Administration Project",
        email: "admin@gmail.com",
        company: "AdministrationProject",
        phone: "(19)91275-9876"
    }

    const name =  userData.name;
    const sigla = name.charAt(0);
    const email = userData.email;
    const phone = userData.phone;
    const company = userData.company;
    const username = userData.username;

    return (
        <section className="w-full min-h-[400px] flex flex-col justify-center items-center mt-[30px]">
            <div className="w-[140px] h-[140px] bg-[#1f1f1f] rounded-full flex justify-center items-center">
                <h2 className="text-3xl text-[#ffff00f7]">{sigla}</h2>
            </div>
            <div className="w-full h-[80px] flex flex-col justify-center items-center">
                <h3 className="text-lg text-[#ffffff]">{userData.name}</h3>
                <h5 className="text-lg text-[#C0C0C0]">{email}</h5>
            </div>
            
            <div className="w-[60%] min-h-[200px] flex flex-col justify-center">
                <div className="w-full h-[40px] flex items-center hover:border-b-2 hover:border-b-yellow-400 duration-100 mt-[5px]">
                    <BsPersonCircle className="mr-[8px]" style={{color: "#ffffff", fontSize: 18}} />
                    <span className="text-sm text-[#ffffff]">{username}</span>
                </div>
                <div className="w-full h-[40px] flex items-center hover:border-b-2 hover:border-b-yellow-400 duration-100 mt-[5px]">
                    <BsFillTelephoneFill className="mr-[8px]" style={{color: "#ffffff", fontSize: 18}} />
                    <span className="text-sm text-[#ffffff]">{phone}</span>
                </div>
                
                <div className="w-full h-[40px] flex items-center hover:border-b-2 hover:border-b-yellow-400 duration-100 mt-[5px]">
                    <BsEnvelopeFill className="mr-[8px]" style={{color: "#ffffff", fontSize: 18}} />
                    <span className="text-sm text-[#ffffff]">{email}</span>
                </div>
                
                <div className="w-full h-[40px] flex items-center hover:border-b-2 hover:border-b-yellow-400 duration-100 mt-[5px]">
                    <MdHomeWork className="mr-[8px]" style={{color: "#ffffff", fontSize: 18}} />
                    <span className="text-sm text-[#ffffff]">{company}</span>
                </div>
            </div>
        </section>
    );
}

export default Profile;