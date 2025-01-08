import { BsFillTelephoneFill, BsEnvelopeFill, BsPersonCircle } from 'react-icons/bs';
import { MdHomeWork } from 'react-icons/md';

export const userData = {
    username: "admin",
    password: "admin1234",
    name: "Administration Project",
    email: "admin@gmail.com",
    company: "AdministrationProject",
    phone: "(19)91275-9876"
};

export const items = [
    { icon: <BsPersonCircle />, title: userData.username || "No username provided" },
    { icon: <BsFillTelephoneFill />, title: userData.phone || "No phone number" },
    { icon: <BsEnvelopeFill />, title: userData.email || "No email address" },
    { icon: <MdHomeWork />, title: userData.company || "No company information" },
];

export const acronym = userData.name.charAt(0);