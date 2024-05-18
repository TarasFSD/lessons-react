import axios from "axios"
import {IPostModel} from "../models/PostModel"

const axiosInstance  = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const SendPostData =async (value:IPostModel)=>{
  const post = await  axiosInstance.post("/posts",value)
    console.log(post)
}

export {
    SendPostData
}