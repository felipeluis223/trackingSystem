
import { MdGroups } from 'react-icons/md';
import { BsFillHouseFill, BsFillPersonLinesFill, BsBarChartFill, BsPeopleFill } from 'react-icons/bs';

export const menuItems = (navigate)=>{
    return [
        { path:() => navigate("/home"), title: 'Home', icon: <BsFillHouseFill /> },
        { path:() => navigate("users"), title: 'Users', icon: <BsPeopleFill /> },
        { path:() => navigate("dashboard"), title: 'Dashboard', icon: <BsBarChartFill /> },
        { path:() => navigate("team"), title: 'Team', icon: <MdGroups /> },
        { path:() => navigate("profile"), title: 'Profile', icon: <BsFillPersonLinesFill /> }
    ];

}

