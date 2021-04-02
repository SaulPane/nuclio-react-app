import React, { useState } from 'react'
import useLocalStorageString from '../hooks/useLocalStorageString';

function InputTask({placeholder,onChange,value}) {
    

    function changeInput(event) {
        const inputValue = event.target.value;
        onChange(inputValue)
    }

    return (
        <input className="m-1 p-2 bg-gray-100 border border-solid border-gray-800 rounded-md" name="task" placeholder={placeholder} type="text" value={value} onChange={changeInput}/>
    )
};

export default InputTask;