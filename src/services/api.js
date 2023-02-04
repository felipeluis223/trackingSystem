import axios from 'axios';

// Generate random user:
async function getUsers(){
    // API do Backend - TrackingSystem
    const url = `http://localhost:3001/users`;
    let response = await axios.get(url);
    return response;
}

export default getUsers;