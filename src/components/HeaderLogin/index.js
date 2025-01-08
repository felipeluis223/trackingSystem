import team from '../../img/virtual.png';
import logo from '../../img/logo.png';

export const HeaderLogin = ()=>(
    <section className="w-full min-h-[100px] sm:w-[50%] sm:h-screen sm:flex sm:flex-col sm:justify-center sm:items-center">
        <img src={logo} className="w-[200px]" alt="Logo" />
        <img src={team} className="hidden sm:block sm:w-[450px]" alt="Team" />
    </section>            
)