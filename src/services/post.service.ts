import axios, {AxiosResponse} from 'axios'

import {IAnswerPostModel, IPostModel} from "../models/post_model";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getUserPosts = (userId: number): Promise<AxiosResponse<IAnswerPostModel>> => {
    return axiosInstance.get(`/posts/user/${userId}`)
}

export {getUserPosts}