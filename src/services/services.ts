import axios from "axios"

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'content-type': 'application/json; charset=UTF-8'}});

const getAllUsers = ()=>{
    return instance.get("users")
}
const getAllPosts = ()=>{
    return instance.get("posts")
}
const getAllCommets = ()=>{
    return instance.get("comments")
}

export {getAllUsers,getAllPosts,getAllCommets}