import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import hacker from '../../img/hacker.png';
import securityData from '../../img/security-data.png';
import company from '../../img/company.png';

function Home(){
    return (
        <section className="w-full min-h-[200px] pt-[50px] flex flex-col justiy-center items-center">
            <h2 className="text-[#ffffff] text-4xl font-bold">Some <span className="text-[#ffff00f7]">news</span></h2>
            <Carousel className="w-[90%] min-h-[200px] max-h-[300px] sm:max-w-[600px] sm:min-h-[400px] sm:max-h-[500px]">
                <Carousel.Item interval={1500}>
                    <img
                        src={hacker}
                        className="w-full h-[300px] sm:w-full sm:w-[400px] sm:h-[400px] bg-[#1f1f1f] rounded-md"
                    />
                    {/* <Carousel.Caption>
                        <h3 className="text-[#0EA5E9] text-5xl font-bold">Security</h3>
                        <p>Information security</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <img
                        src={securityData}
                        className="w-full h-[300px] sm:w-full sm:w-[400px] sm:h-[400px] bg-[#1f1f1f] rounded-md"
                    />
                    {/* <Carousel.Caption>
                        <h3 className="text-[#0EA5E9] text-5xl font-bold">Security</h3>
                        <p>Information security</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <img
                        src={company}
                        className="w-full h-[300px] sm:w-full sm:w-[400px] sm:h-[400px] bg-[#1f1f1f] rounded-md"
                    />
                    {/* <Carousel.Caption>
                        <h3 className="text-[#0EA5E9] text-5xl font-bold">Security</h3>
                        <p>Information security</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>

        </section>
    )
}

export default Home;