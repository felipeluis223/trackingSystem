import { Outlet, useNavigate } from "react-router-dom";

import { BsFillHouseFill, BsFillPersonLinesFill, BsBarChartFill, BsPeopleFill, BsBriefcaseFill } from 'react-icons/bs';
import { TbLogin } from 'react-icons/tb';

import logo from '../img/logo.png';

import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/user/actions'

function Home(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProfile = () => navigate("profile");
    const handleHome = () => navigate("welcome");
    const handleDashboard = () => navigate("dashboard");
    const handleUsers = () => navigate("users");
    const handleLogout = ()=> {
        dispatch(logoutUser())
        navigate("/");
    }


    return (
        <section className="w-full min-h-screen bg-[#242424] sm:flex sm:flex-row">
            <section className="w-full min-h-[80px] border-b-2 bg-[#1f1f1f] border-b-yellow-400 sm:w-[250px] sm:border-r-[1px] sm:border-b-0 sm:border-r-yellow-400">
                <div className="w-full h-[90px] flex items-center sm:justify-center">
                    <img src={logo} className="w-[180px]" />
                </div>
                <div className="hidden sm:block sm:w-full sm:flex sm:flex-col sm:items-center sm:min-h-[400px] sm:cursor-pointer">
                    <div 
                        className="w-[90%] h-[50px] flex flex-row items-center pl-[15px] text-[#ffffff] hover:text-[#0EA5E9] mt-[30px] hover:border-b-[1px] hover:border-sky-500 duration-100 "
                        onClick={handleHome}
                    >
                        <BsFillHouseFill style={{fontSize: 20, marginRight: 5}} />
                        <span className="text-lg">Home</span>
                    </div>

                    <div 
                        className="w-[90%] h-[50px] flex flex-row items-center pl-[15px] text-[#ffffff] hover:text-[#0EA5E9] hover:border-b-[1px] hover:border-sky-500 duration-100 "
                        onClick={handleUsers}
                    >
                        <BsPeopleFill style={{fontSize: 20, marginRight: 5}} />
                        <span className="text-lg">Users</span>
                    </div>
                                        
                    <div className="w-[90%] h-[50px] flex flex-row items-center pl-[15px] text-[#ffffff] hover:text-[#0EA5E9] hover:border-b-[1px] hover:border-sky-500 duration-100 ">
                        <BsBriefcaseFill style={{fontSize: 20, marginRight: 5}} />
                        <span className="text-lg">Contracts</span>
                    </div>

                    <div 
                        className="w-[90%] h-[50px] flex flex-row items-center pl-[15px] text-[#ffffff] hover:text-[#0EA5E9] hover:border-b-[1px] hover:border-sky-500 duration-100 "
                        onClick={handleDashboard}
                    >
                        <BsBarChartFill style={{fontSize: 20, marginRight: 5}} />
                        <span className="text-lg">Dashboard</span>
                    </div>
                    
                    <div 
                        className="w-[90%] h-[50px] flex flex-row items-center pl-[15px] text-[#ffffff] hover:text-[#0EA5E9] hover:border-b-[1px] hover:border-sky-500 duration-100 "
                        onClick={handleProfile}
                    >
                        <BsFillPersonLinesFill style={{fontSize: 20, marginRight: 5}} />
                        <span className="text-lg">Profile</span>
                    </div>

                    <div 
                        className="w-[90%] h-[50px] flex flex-row items-center pl-[15px] text-[#ffffff] hover:text-[#0EA5E9] hover:border-b-[1px] hover:border-sky-500 duration-100 mt-[80px]"
                        onClick={handleLogout}
                    >
                        <TbLogin style={{fontSize: 20, marginRight: 5}} />
                        <span className="text-lg">Exit</span>
                    </div>
                </div>
            </section>
            <section className="w-full h-screen overflow-y-auto">
                <Outlet />
            </section>
        </section>
    );
}

export default Home;