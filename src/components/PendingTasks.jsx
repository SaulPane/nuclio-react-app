import React from 'react'

function PendingTasks({tasks}) {
    return (
        <p>Pending tasks: {tasks.length}</p>
    )
};

export default PendingTasks;