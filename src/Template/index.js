import { Outlet } from "react-router-dom";

function Home(){
    return (
        <section className="w-full min-h-screen bg-[#242424] sm:flex sm:flex-row">
            <section className="w-full min-h-[80px] border-b-2 bg-[#1f1f1f] border-b-yellow-400 sm:w-[300px] sm:border-r-2 sm:border-b-0 sm:border-r-yellow-400">
            </section>
            <Outlet />
        </section>
    );
}

export default Home;