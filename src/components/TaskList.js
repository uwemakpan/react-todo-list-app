import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleCompletion }) => {
  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </div>
  )
}

export default TaskList
