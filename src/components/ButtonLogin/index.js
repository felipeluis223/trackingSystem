import { FcGoogle } from 'react-icons/fc';

export const ButtonLogin = ({fn})=>(
    <div className="w-full sm:max-w-[400px] mt-[10px]">
        <div className="w-full h-[60px] flex flex-col sm:flex-row sm:justify-between">
            <div className="max-w-[50%] h-[30px] flex flex-row items-center">
                <input type="checkbox" name="rememberMe" value="rememberMe" />
                <label className="ml-[3px] text-[#C0C0C0] hover:text-[#0EA5E9] text-sm cursor-pointer">Remember me</label>
            </div>
            <div className="max-w-[50%] h-[30px] flex flex-row items-center cursor-pointer">
                <a className="text-[#C0C0C0] hover:text-[#0EA5E9] text-sm">Forgot password?</a>
            </div>
        </div>
        <button 
            className="w-full h-[40px] bg-[#ffff00f7] rounded-md text-lg font-bold"
            onClick={fn}
        >Login</button>

        <div className="w-full h-[40px] mt-[10px]">
            <button className="w-full h-full text-sm bg-[#ffffff] rounded-md flex flex-row justify-center items-center">
                <FcGoogle className="mr-[5px]" />
                Sign in with Google
            </button>
        </div>
    </div>
);