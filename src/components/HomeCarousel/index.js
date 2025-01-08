import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../../img/slide1.png';
import slide2 from '../../img/slide2.png';
import slide3 from '../../img/slide3.png';
import slide4 from '../../img/slide4.png';

export const HomeCarousel = () => (
    <Carousel className="w-[90%] h-[200px] sm:w-[800px] sm:h-[300px]">
        <Carousel.Item interval={1500}>
            <img
                src={slide1}
                className="w-full h-[150px] sm:h-[250px] bg-[#1f1f1f] border-t-[1px] border-b-[1px] border-t-white border-b-white"
                alt="slide 1"
            />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img
                src={slide2}
                className="w-full h-[150px] sm:h-[250px] bg-[#1f1f1f] border-t-[1px] border-b-[1px] border-t-white border-b-white"
                alt="slide 2"
            />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img
                src={slide3}
                className="w-full h-[150px] sm:h-[250px] bg-[#1f1f1f] border-t-[1px] border-b-[1px] border-t-white border-b-white"
                alt="slide 3"
            />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img
                src={slide4}
                className="w-full h-[150px] sm:h-[250px] bg-[#1f1f1f] border-t-[1px] border-b-[1px] border-t-white border-b-white"
                alt="slide 4"
            />
        </Carousel.Item>
    </Carousel>
);
