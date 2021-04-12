import React from 'react'

function PendingTasks({tasks}) {
    const uncompletedTasks = tasks.filter(task => !task.completed)
    return (
        <p className="p-2 m-1">Pending tasks: {uncompletedTasks.length}</p>
    )
};

export default PendingTasks;