import React, { useState, useEffect } from 'react'

const TaskForm = ({ onAddTask, taskToEdit }) => {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  // If editing a task, pre-fill the form with task details
  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name)
      setTaskDescription(taskToEdit.description)
    }
  }, [taskToEdit])

  // Form validation
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!taskName || !taskDescription) {
      alert('Please fill in both fields')
      return
    }

    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    }

    onAddTask(newTask)

    // Reset form
    setTaskName('')
    setTaskDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <input
        type='text'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder='Task Name'
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder='Task Description'
      />
      <button type='submit'>{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
    </form>
  )
}

export default TaskForm
