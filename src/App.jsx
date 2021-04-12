import React, { useEffect, useRef, useState } from 'react'
import Title from './components/Title'
import PendingTasks from './components/PendingTasks'
import FormTasks from './components/FormTasks'
import InputTask from './components/InputTask'
import AddTaskButton from './components/AddTaskButton'
import ItemsList from './components/ItemsList'
import Error from './components/Error'
import DeleteButton from './components/DeleteButton'
import ClearCompletedTasks from './components/ClearCompletedTasks'

import './global.css'
import useLocalStorage from './hooks/useLocalStorageArray'
import useLocalStorageString from './hooks/useLocalStorageString'


function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [error, setError] = useState(false);
  const [textInput, setTextInput] = useLocalStorageString("inputText", "");

  const ref = useRef();

  useEffect(() => {
    const pendingTasks = tasks.filter(task => !task.completed)
    document.title = `${pendingTasks.length} tasks left to do`
  }, [tasks])

  useEffect(() => {
    const pendingTasks = tasks.filter(task => !task.completed)
    if(!pendingTasks.length) {
      alert("There are no tasks to complete.")
    }
  }, [])

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
    setTextInput("");
  }

  function completedTask(idItem) {
    const newTask = tasks.map(task => {
      if (task.id === idItem) {
        task.linethrough = !task.linethrough
        task.completed = !task.completed
      }
      return task
    });
    setTasks(newTask);
    setError(false);
    setTextInput("");
  }

  function clearCompletedTasks() {
    const newTask = tasks.filter(task => !task.completed);
    setTasks(newTask);
    setError(false);
    setTextInput("");
  }

  function changeInput(inputValue) {
    setTextInput(inputValue);
    if(error) {
      setError(false);
    }
  }

  const focusInput = () => ref.current.focus();

  

  
  
  return (
    <div className="w-96 text-center mx-auto bg-white bg-opacity-70 p-4 m-4 rounded-md">
      <Title />
      <PendingTasks tasks={tasks} />
      <FormTasks onSubmit={addTask}>
        <InputTask ref={ref} placeholder="Task Title" value={textInput} onChange={changeInput} />
        <AddTaskButton onClick={focusInput}/>
      </FormTasks>
      <Error  value={error}/>
      <div className="grid grid-cols-8 gap-4">
        <div>
          <ItemsList>
            {tasks.map(task => <li onClick={() => deleteTask(task.id)} key={task.id}><DeleteButton /></li>)}
          </ItemsList>
        </div>
        <div className="col-span-7">
          <ItemsList>
            {tasks.map(task => <li className={task.linethrough ? "line-through border-b border-dotted border-red-400 mt-1" : "border-b border-dotted border-red-400 mt-1"} onClick={() => completedTask(task.id)} key={task.id}>{task.task}</li>)}
          </ItemsList>
        </div>
      </div>
      <ClearCompletedTasks onClick={clearCompletedTasks} />
    </div>
  )
}


export default App
