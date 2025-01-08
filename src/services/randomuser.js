import axios from 'axios';


// Generate random user:
async function getUsers(userAmount=10){

    // API para gerar usuários aleatório:
    const url = `https://randomuser.me/api/?results=${userAmount}`;
    const response = await axios.get(url).then((item)=>{

        // Formatando o objeto:
        let users = [];
        for(let index=0; index<userAmount; index++){
            let response = item.data.results[index]
            let obj = {
                name: response.name.first,
                lastName: response.name.last,
                age: response.dob.age,
                city: response.location.city,
                email: response.email,
                cell: response.cell,
                username: response.login.username,
                password: response.login.password
            };
            users.push(obj);
        }
        return users;
        
    }).catch((error)=>console.log("Ops! Erro: ", error));

    return response;
}

export default getUsers;