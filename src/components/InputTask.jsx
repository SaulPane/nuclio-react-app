import React, { useState, forwardRef } from 'react'
import useLocalStorageString from '../hooks/useLocalStorageString';

function InputTask({placeholder,onChange,value,autoFocus}, ref) {
    

    function changeInput(event) {
        const inputValue = event.target.value;
        onChange(inputValue)
    }

    return (
        <input ref={ref} className="m-1 p-2 bg-gray-100 border border-solid border-gray-800 rounded-md focus:outline-none" id="task" name="task" placeholder={placeholder} type="text" value={value} onChange={changeInput}/>
    )
};

export default forwardRef(InputTask);