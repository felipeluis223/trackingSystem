import axios from 'axios';

// Generate random user:
async function createUser(qtd){
    const url = `https://randomuser.me/api/?results=${qtd}`;
    let response = await axios.get(url);
    return response;
}

export default createUser;