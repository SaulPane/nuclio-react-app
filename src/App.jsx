import React, { useState } from 'react'
import Title from './components/Title'
import PendingTasks from './components/PendingTasks'
import FormTasks from './components/FormTasks'
import InputTask from './components/InputTask'
import AddTaskButton from './components/AddTaskButton'
import ItemsList from './components/ItemsList'
import Error from './components/Error'

import './global.css'
import useLocalStorage from './hooks/useLocalStorageArray'
import useLocalStorageString from './hooks/useLocalStorageString'



function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [error, setError] = useState(false);
  const [textInput, setTextInput] = useLocalStorageString("inputText", "");
  

   
  function addTask(task) {
    if(!task.task) {
      setError(true);
    } else {
      const newTask = [...tasks,task];
      setTasks(newTask);
      setTextInput("");
    }
  }
  
  function deleteTask(idItem) {
    const newTask = tasks.filter(task => task.id !== idItem);
    setTasks(newTask);
    setError(false);
  }

  function changeInput(inputValue) {
    setTextInput(inputValue);
    if(error) {
      setError(false);
    }
  }
  
  return (
    <div className="w-96 text-center mx-auto bg-white bg-opacity-70 p-4 m-4 rounded-md">
      <Title />
      <PendingTasks tasks={tasks} />
      <FormTasks onSubmit={addTask}>
        <InputTask placeholder="Task Title" value={textInput} onChange={changeInput} />
        <AddTaskButton />
      </FormTasks>
      <Error  value={error}/>
      <ItemsList>
        {tasks.map(task => <li className="border-b border-dotted border-red-400 mt-1" onClick={() => deleteTask(task.id)} key={task.id}>{task.task}</li>)}
      </ItemsList>
    </div>
  )
}

export default App
