import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/user/actions';

import { standardUser } from './standard-user';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputLogin } from '../InputLogin';
import { ButtonLogin } from '../ButtonLogin';
import { HeaderLogin } from '../HeaderLogin';
import { login } from '../../utils/login';

function Login(){
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    // Settings - Redux:
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Responsible for login:
    const handleLogin = () => login(username, password, navigate, dispatch, toast);

    return(
        <section className="w-full  bg-[#1f1f1f] sm:bg-[#1f1f1f] flex flex-col-reverse sm:flex-row-reverse justify-center items-center sm:justify-start sm:rounded-none">
            <section className="w-full min-h-[600px] sm:w-[50%] sm:h-screen bg-[#242424] rounded-md sm:rounded-none p-[20px] sm:flex sm:flex-col sm:justify-center sm:items-center">
                <div className="w-full sm:w-[80%] min-h-[300px] pb-[10px] sm:min-h-[50%] flex flex-col justify-center items-center">
                    <h3 className="w-[80%] text-[#fffafa] font-bold text-3xl">Hey, <span className="text-[#ffff00f7]">hello</span></h3>
                    <span className="w-[80%] text-[#C0C0C0] text-sm">Enter the information you entered while registering</span>

                    <div className="w-[80%] h-full mt-[20px] gap-[15px] flex flex-col">
                        <InputLogin 
                            title="Email" 
                            type={"text"}
                            placeholder="enter your username"
                            onChange={(value)=>setUsername(value)} />

                        <InputLogin 
                            title="Password"
                            type="password" 
                            placeholder="enter your password"
                            onChange={(value)=>setPassword(value)} />

                        <ButtonLogin fn={handleLogin} />
                        <ToastContainer />

                    </div>
                </div>
            </section>

            <HeaderLogin />

        </section>
    )
}


export default Login;