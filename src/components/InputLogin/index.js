import { useState } from "react"
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs';

export const InputLogin = ({title, placeholder, onChange, type}) =>{
    const [ data, setData ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false);

    const handleShowPassord = () => setShowPassword(!showPassword);

    const styles = {
        password:{color: "#fafafa", fontSize: 25 }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setData(value); // Atualiza o estado local
        onChange(value); // Passa o valor para o componente pai
    };


    return(
        <div className="w-full h-[60px] sm:max-w-[400px] border-b-2 border-gray-400 hover:border-sky-500 duration-100">
            <label className="text-[#fafafa] text-lg"> {title} </label>
            {
                type === "text" &&(
                    <input 
                        type={type} 
                        className="w-full bg-[#242424] outline-0 text-[#0EA5E9] mt-[3px]" 
                        placeholder= {placeholder}
                        value={data}
                        onChange={handleChange}
                    />
                )
            }

            {
                type === "password" &&(
                    <div className="w-full mt-[3px] flex flex-row">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="w-full bg-[#242424] outline-0 text-[#0EA5E9] mt-[3px]" 
                            placeholder= {placeholder}
                            value={data}
                            onChange={handleChange}
                        />
                        
                        <button onClick={handleShowPassord}>
                            {showPassword ? <BsEyeFill style={styles.password} /> : <BsEyeSlashFill style={styles.password} />}
                        </button>
                    </div>
                )
            }
            
        </div>
    )
}