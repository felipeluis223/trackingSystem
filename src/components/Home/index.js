import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../../img/slide1.png';
import slide2 from '../../img/slide2.png';
import slide3 from '../../img/slide3.png';
import slide4 from '../../img/slide4.png';

import security from '../../img/security-data.png';
import company from '../../img/company.png';

function Home(){
    return (
        <section className="w-full min-h-[200px] pt-[50px] flex flex-col justiy-center items-center">
            <h2 className="text-[#ffffff] text-4xl font-bold">Some <span className="text-[#ffff00f7]">news</span></h2>
            <Carousel className="w-[90%] h-[200px] sm:w-[800px] sm:h-[300px]">
                <Carousel.Item interval={1500}>
                    <img
                        src={slide1}
                        className="w-full h-[150px] sm:h-[250px] bg-[#1f1f1f] border-t-[1px] border-b-[1px] border-t-white border-b-white"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        src={slide2}
                        className="w-full h-[150px] sm:h-[250px] bg-[#1f1f1f] border-t-[1px] border-b-[1px] border-t-white border-b-white"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        src={slide3}
                        className="w-full h-[150px] sm:h-[250px] bg-[#1f1f1f] border-t-[1px] border-b-[1px] border-t-white border-b-white"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        src={slide4}
                        className="w-full h-[150px] sm:h-[250px] bg-[#1f1f1f] border-t-[1px] border-b-[1px] border-t-white border-b-white"
                    />
                </Carousel.Item>
            </Carousel>

            <section className="w-full h-[400px] flex flex-row mt-[60px]">
                <div className="w-[50%] h-full flex justify-center items-center text-center">
                    <h3 className="w-[70%] text-3xl text-[#ffffff] font-bold">The future will only come if, in the present, the <span className="text-[#ffff00f7]">security you adopt</span></h3>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center text-center">
                    <img src={security} className="" />
                </div>
            </section>

            <section className="w-full h-[400px] flex flex-row-reverse">
                <div className="w-[50%] h-full flex justify-center items-center text-center">
                    <h3 className="w-[70%] text-3xl text-[#ffffff] font-bold">Live safely. Work with <span className="text-[#ffff00f7]">confidence</span></h3>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center text-center">
                    <img src={company} className="" />
                </div>
            </section>
        </section>
    )
}

export default Home;