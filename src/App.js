import React, { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])

  // Load tasks from localStorage when the app initializes
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(storedTasks)
  }, [])

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  // Edit an existing task
  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    )
    setTasks(updatedTasks)
  }

  // Delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  // Toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <div className='app'>
      <h1>To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        onToggleCompletion={toggleTaskCompletion}
      />
    </div>
  )
}

export default App
