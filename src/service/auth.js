import axios from 'axios';

export const login = async (user) => {
    const r = await axios.post('http://localhost:8080/api/auth/login', JSON.stringify(user),
        {headers: {'Content-Type': 'application/json'}});
    return r;
};

export const registerUser = async (user) => {
    return await axios.post('http://localhost:8080/api/auth/register', JSON.stringify(user),
        {headers: {'Content-Type': 'application/json'}});
};