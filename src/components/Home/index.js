import Lottie from 'react-lottie';
import { worldOptions } from '../../lotties/configsLotties';

function Home(){
    return (
        <section className="w-full h-screen bg-[#1f1f1f] flex flex-col">
            <div className="w-full h-[50%] pt-[20px]">
                    <Lottie options={worldOptions} width={400} height={140}/>
                <h3 className="w-full text-3xl text-center text-[#9400D3] font-bold pt-[5px]">Análise sobre a População</h3>
                <h3 className="w-full text-sm text-center text-[#fffafa]"><i>Instituto Brasileiro de Geografia e Estatística(IBGE)</i></h3>
            </div>

            <div className="w-full h-[50%]">
            </div>
        </section>
    )
}

export default Home;