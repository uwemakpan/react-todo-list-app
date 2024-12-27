import React, { useState } from 'react'
import styles from '../App.css'

const TaskItem = ({ task, onEdit, onDelete, onToggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false)

  // Edit task functionality
  const handleEdit = () => {
    setIsEditing(true)
    onEdit(task.id, { name: task.name, description: task.description })
  }

  // Confirm and delete task
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id)
    }
  }

  return (
    <div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      onClick={() => onToggleCompletion(task.id)}
    >
      {isEditing ? (
        <div>
          <input
            type='text'
            value={task.name}
            onChange={(e) => onEdit(task.id, { name: e.target.value })}
          />
          <textarea
            value={task.description}
            onChange={(e) => onEdit(task.id, { description: e.target.value })}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default TaskItem
