import {useState} from "react"

export const usePrevious = (value?: string)=> {
    const [previous, setPrevious] = useState<any>("default")
    const [current, setCurrent] = useState<any>(value)
        if (current !== value) {
            setPrevious(current)
            setCurrent(value)
        }


    return {previous, current,}
}