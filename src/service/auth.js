import axios from 'axios';

export const login = async (user) => {
    user.rememberMe = false;
    console.log(JSON.stringify(user));
    return await axios.post('http://localhost:8080/api/auth/login', JSON.stringify(user),
        {headers: {'Content-Type': 'application/json'}});
};

export const registerUser = async (user) => {
    console.log(JSON.stringify(user));
    return await axios.post('http://localhost:8080/api/auth/register', JSON.stringify(user),
        {headers: {'Content-Type': 'application/json'}});
};

export default login;
