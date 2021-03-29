import React, { useState } from 'react'
import getRandomInt from '../utils/getRandomInt';

function FormTasks({children,onSubmit}) {
    function addTask(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        onSubmit({
            id:getRandomInt(),
            task:data.get("task")
        });
    }

    return (
        <form onSubmit={addTask}>{children}</form>
    )
};

export default FormTasks;