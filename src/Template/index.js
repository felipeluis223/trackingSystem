import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/user/actions'
import { CardsItemsMenu } from "../components/CardsMenu";
import { menuItems } from "../components/CardsMenu/menuItems";
import { Logo } from "../components/Logo";
import { Logout } from "../components/Logout";

function Home(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleHome = menuItems(navigate);

    const handleLogout = ()=> {
        dispatch(logoutUser())
        navigate("/");
    };

    return (
        <section className="w-full min-h-screen bg-[#242424] sm:flex sm:flex-row">
            <section className="w-full min-h-[80px] border-b-2 bg-[#1f1f1f] border-b-yellow-400 sm:w-[250px] sm:border-r-[1px] sm:border-b-0 sm:border-r-yellow-400">
                <Logo />

                <div className="hidden sm:block sm:w-full sm:flex sm:flex-col sm:items-center sm:min-h-[400px] sm:cursor-pointer">          
                    {
                        handleHome.map((item, index)=>(
                            <CardsItemsMenu fn={item.path} name={item.title} icon={item.icon} key={index} />
                        ))
                    }

                    <Logout fn={handleLogout} />
                </div>
            </section>

            <section className="w-full h-screen overflow-y-auto">
                <Outlet />
            </section>
        </section>
    );
}

export default Home;