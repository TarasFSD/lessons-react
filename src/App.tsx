import React, {ChangeEvent, useState} from 'react';
import {useToggle} from "./hooks/useToggleHook"
import {usePrevious} from "./hooks/usePreviousHook"
import {useStorage} from "./hooks/useStorageHook"

function App() {
    const [inputText, setInputText] = useState("");
    const [inputTextStorage, setInputTextStorage] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };
    const handleChangeStorage = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTextStorage(e.target.value);
    };


    const {value, toggle,} = useToggle()
    const {current, previous, } = usePrevious(inputText)
    const {data,sendToStorage, getFromStorage} = useStorage("text", inputTextStorage)

    return (
        <div className="App">
            <div>value {`${value}`}</div>
            <button onClick={() => toggle()}>change toggle</button>
            <br/>
            <br/>
            <div>previous: {`${previous}`}</div>
            <input type="text" onChange={handleChange} value={inputText}/>
            <br/>
            <br/>
            <div> {`${data}`}</div>
            <input type="text" onChange={handleChangeStorage} value={inputTextStorage}/>
            <button onClick={() => sendToStorage()}>send data</button>
        </div>
    );
}

export default App;
