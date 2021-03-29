import React, { useState } from 'react'
import Title from './components/Title'
import PendingTasks from './components/PendingTasks'
import FormTasks from './components/FormTasks'
import InputTask from './components/InputTask'
import AddTaskButton from './components/AddTaskButton'
import ItemsList from './components/ItemsList'
import Error from './components/Error'

import './global.css'



function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);
  if(!localStorage.getItem("inputText")) { 
    localStorage.setItem("inputText", "")
  };
  
  const [tasksStorage,setTasksStorage] = useState(() => {
    if(localStorage.getItem("tasks")) {
    return JSON.parse(localStorage.getItem("tasks"))
    } else { return [] }
  });

   
  function addTask(task) {
    if(!task.task) {
      setError(true);
    } else {
      const newTask = [...tasks,task];
      setTasks(newTask);
      setTasksStorage(newTask);
      localStorage.setItem("inputText", "");
      localStorage.setItem("tasks", JSON.stringify(newTask));
    }
  }
  
  function deleteTask(idItem) {
    const newTask = tasksStorage.filter(task => task.id !== idItem);
    setTasks(newTask);
    setTasksStorage(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }



  function changeInput() {
    if(error) {
      setError(false);
    }
  }
  
  return (
    <div>
      <Title />
      <PendingTasks tasks={tasksStorage} />
      <FormTasks onSubmit={addTask}>
        <InputTask placeholder="Task Title" onChange={changeInput} />
        <AddTaskButton />
      </FormTasks>
      <Error  value={error}/>
      <ItemsList>
        {tasksStorage.map(task => <li onClick={() => deleteTask(task.id)} key={task.id}>{task.task}</li>)}
      </ItemsList>
    </div>
  )
}

export default App
