import React, { useState } from 'react'

function InputTask({placeholder,onChange,value}) {
    const [textInput,setTextInput] = useState("");

    function changeInput(event) {
        const inputValue = event.target.value;
        localStorage.setItem("inputText",inputValue);
        setTextInput(localStorage.getItem("inputText"));
        
        onChange()
    }

    return (
        <input name="task" placeholder={placeholder} type="text" value={localStorage.getItem("inputText")} onChange={changeInput}/>
    )
};

export default InputTask;