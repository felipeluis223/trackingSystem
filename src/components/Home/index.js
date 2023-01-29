import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../../img/slide1.png';
import slide2 from '../../img/slide2.png';
import slide3 from '../../img/slide3.png';
import slide4 from '../../img/slide4.png';

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

        </section>
    )
}

export default Home;