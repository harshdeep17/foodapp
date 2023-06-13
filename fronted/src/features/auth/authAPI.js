import axios from "axios"

export const registerUser = (user)=>{
    return axios.post("http://localhost:4000/api/auth/register", user);
}
export const loginUser = (user)=>{
    return axios.post("http://localhost:4000/api/auth/login", user);
}

