import React from 'react'

function PendingTasks({tasks}) {
    return (
        <p className="p-2 m-1">Pending tasks: {tasks.length}</p>
    )
};

export default PendingTasks;