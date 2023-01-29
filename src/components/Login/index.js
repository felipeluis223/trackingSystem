import { useState } from 'react';

import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import team from '../../img/virtual.png'

import { standardUser } from './standard-user';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(){
    const [ showPassword, setShowPassword ] = useState(false);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    
    // Responsible for the passoword:
    const handleShowPassord = () => setShowPassword(!showPassword);


    const handleLogin = () => {
        if(username === standardUser.username && password === standardUser.password){
            const msg = "Uhuul! Seja bem-vindo Admin";
            toast.success(msg, {
                theme: "dark"
            });
        }
        else{
            const msg = "Ops! Informações inválidas";
            toast.warning(msg, {
                theme: "dark"
            });
        }
    }

    return(
        <section className="w-full  bg-[#1f1f1f] sm:bg-[#1f1f1f] flex flex-col-reverse sm:flex-row-reverse justify-center items-center sm:justify-start sm:rounded-none">
            <section className="w-full min-h-[600px] sm:w-[50%] sm:h-screen bg-[#242424] rounded-md sm:rounded-none p-[20px] sm:flex sm:flex-col sm:justify-center sm:items-center">
                <div className="w-full sm:w-[80%] min-h-[300px] pb-[10px] sm:min-h-[50%] flex flex-col justify-center items-center">
                    <h3 className="w-[80%] text-[#fffafa] font-bold text-3xl">Hey, <span className="text-[#ffff00f7]">hello</span></h3>
                    <span className="w-[80%] text-[#C0C0C0] text-sm">Enter the information you entered while registering</span>
                    <div className="w-[80%] h-full mt-[20px] flex flex-col">    
                        <div className="w-full h-[60px] sm:max-w-[400px] border-b-2 border-gray-400 hover:border-sky-500 duration-100">
                            <label className="text-[#fafafa] text-lg">Email:</label>
                            <input 
                                type="text" 
                                className="w-full bg-[#242424] outline-0 text-[#0EA5E9] mt-[3px]" 
                                placeholder="enter your username" 
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-[60px] sm:max-w-[400px] border-b-2 border-gray-400 hover:border-sky-500 duration-100 mt-[15px]">
                            <label className="text-[#fafafa] text-lg">Password:</label>
                            <div className="w-full mt-[3px] flex flex-row">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className="w-full bg-[#242424] outline-0 text-[#0EA5E9]" 
                                    placeholder="enter your password" 
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <button onClick={handleShowPassord}>
                                    {showPassword ? <BsEyeFill style={styles.password} /> : <BsEyeSlashFill style={styles.password} />}
                                </button>
                            </div>
                        </div>
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
                                onClick={handleLogin}
                            >Login</button>
                        </div>

                        <div className="w-full h-[40px] mt-[10px]">
                            <button className="w-full h-full text-sm bg-[#ffffff] rounded-md flex flex-row justify-center items-center">
                                <FcGoogle className="mr-[5px]" />
                                Sign in with Google
                            </button>
                        </div>

                        <ToastContainer />

                    </div>
                </div>
            </section>

            <section className="w-full h-[400px] sm:w-[50%] sm:h-screen sm:flex sm:justify-center sm:items-center">
                <img src={team} className="w-[450px]" />
            </section>            
        </section>
    )
}


const styles = {
    password:{color: "#fafafa", fontSize: 25 }
}

export default Login;