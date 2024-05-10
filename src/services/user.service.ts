import axios, {AxiosResponse} from 'axios'

import {IAnswerModel} from "../models/user_model";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getAllUsers = (): Promise<AxiosResponse<IAnswerModel>> => {
    return axiosInstance.get('/users')
}

export {getAllUsers}