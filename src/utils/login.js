import { standardUser } from "../components/Login/standard-user"
import { loginUser } from "../redux/user/actions"


// Verificando se está valido para o acesso do sistema:
export const login = (username, password, navigate, dispatch, toast)=>{;
    if(username === standardUser.username && password === standardUser.password){
        dispatch(loginUser(standardUser));
        navigate("/home");
        toast.success("Welcome Admin", { theme: "dark" }); // Notification        
    } 
    else{
        const msg = "Ops! Invalid information. Please, try again";
        toast.warning(msg, {
            theme: "dark"
        });
    }
}