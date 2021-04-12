import React from 'react'

function AddTaskButton({onClick}) {
    return (
        <button onClick={onClick} className="bg-gray-600 hover:bg-gray-900 p-2 m-1 text-gray-100 border border-solid border-gray-800 rounded-md" type="submit">Add Task</button>
    )
};

export default AddTaskButton;