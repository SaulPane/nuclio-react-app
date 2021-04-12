import React from 'react'

function ClearCompletedTasks({onClick}) {
    function clearCompletedTasks() {
        onClick()
    }
    return (
        <button onClick={clearCompletedTasks} className="bg-gray-600 hover:bg-gray-900 p-2 m-1 text-gray-100 border border-solid border-gray-800 rounded-md">Clear completed tasks</button>
    )
}

export default ClearCompletedTasks