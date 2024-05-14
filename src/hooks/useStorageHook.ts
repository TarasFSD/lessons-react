import {useState} from "react"


export const useStorage = (key: string, newValue: string) => {
    const [data, setData] = useState<any>("")

    const sendToStorage = () => {
        localStorage.setItem(key, newValue);
        setData(newValue)
    }
    const getFromStorage = () => {
        setData(localStorage.getItem(key))
    }

    return {data,sendToStorage, getFromStorage}
}