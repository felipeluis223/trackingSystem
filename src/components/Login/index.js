import { BsPersonCircle, BsKeyFill, BsEyeFill } from 'react-icons/bs';

function Login(){
    return(
        <section className="w-full h-screen  bg-[#1f1f1f] sm:bg-[#ffffff] flex flex-row sm:flex-row-reverse justify-center items-center sm:justify-start sm:rounded-none">
            <section className="w-full sm:w-[50%] sm:h-screen bg-[#242424] rounded-md sm:rounded-none p-[20px]">
                <div className="w-full h-[400px] sm:h-[80%]">
                    <h3 className="w-full text-[#fffafa] font-bold text-3xl">Hey, <span className="text-[#ff0]">hello</span></h3>
                    <span className="w-full text-[#C0C0C0] text-sm">Enter the information you entered while registering</span>
                    <div className="w-[80%] h-full mt-[20px] flex flex-col">
                        <div className="w-full h-[60px] sm:max-w-[400px] border-b-2 border-gray-400 hover:border-sky-500 duration-100">
                            <label className="text-[#fafafa]">Email:</label>
                            <input type="text" className="w-full bg-[#242424] outline-0 text-[#0EA5E9] mt-[3px]" placeholder="enter your username" />
                        </div>
                        <div className="w-full h-[60px] sm:max-w-[400px] border-b-2 border-gray-400 hover:border-sky-500 duration-100 mt-[15px]">
                            <label className="text-[#fafafa]">Password:</label>
                            <div className="w-full mt-[3px] flex flex-row">
                                <input type="text" className="w-full bg-[#242424] outline-0 text-[#0EA5E9]" placeholder="enter your password" />
                                <BsEyeFill style={{color: "#fafafa", fontSize: 25, cursor: "pointer"}} />
                            </div>
                            
                        </div>
                        <div className="w-full sm:max-w-[400px] mt-[10px]">
                            <div className="w-full h-[60px] flex flex-col sm:flex-row sm:justify-between">
                                <div className="max-w-[50%] h-[30px] flex flex-row items-center">
                                    <input type="checkbox" name="rememberMe" value="rememberMe" />
                                    <label for="rememberMe" className="ml-[3px] text-[#C0C0C0] hover:text-[#0EA5E9] cursor-pointer">Remember me</label>
                                </div>
                                <div className="max-w-[50%] h-[30px] flex flex-row items-center cursor-pointer">
                                    <a className="text-[#C0C0C0] hover:text-[#0EA5E9] ">Forgot password?</a>
                                </div>
                            </div>
                            <button className="w-full h-[40px] bg-[#ff0] rounded-md">Login</button>
                        </div>
                    
                    </div>
                </div>
            </section>
            
        </section>
    )
}

export default Login;