import 'bootstrap/dist/css/bootstrap.css';

import security from '../../img/security-data.png';
import company from '../../img/company.png';
import { HomeCarousel } from '../HomeCarousel';

function Home(){
    return (
        <section className="w-full min-h-[200px] pt-[50px] flex flex-col justiy-center items-center">
            <h2 className="text-[#ffffff] text-4xl font-bold">Some <span className="text-[#ffff00f7]">news</span></h2>
            <HomeCarousel />

            <section className="w-full h-[400px] flex flex-row mt-[60px]">

                <div className="w-[50%] h-full flex justify-center items-center text-center">
                    <h3 className="w-[70%] text-3xl text-[#ffffff] font-bold">The future will only come if, in the present, the <span className="text-[#ffff00f7]">security you adopt</span></h3>
                </div>

                <div className="w-[50%] h-full flex justify-center items-center text-center">
                    <img src={security} alt="security" />
                </div>

            </section>

            <section className="w-full h-[400px] flex flex-row-reverse">

                <div className="w-[50%] h-full flex justify-center items-center text-center">
                    <h3 className="w-[70%] text-3xl text-[#ffffff] font-bold">Live safely. Work with <span className="text-[#ffff00f7]">confidence</span></h3>
                </div>

                <div className="w-[50%] h-full flex justify-center items-center text-center">
                    <img src={company} alt="company" />
                </div>

            </section>
        </section>
    )
}

export default Home;