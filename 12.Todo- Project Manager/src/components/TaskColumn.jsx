import React from 'react'
import "./TaskColumn.css"
import TaskCard from './TaskCard'

const TaskColumn = ({heading, tasks, status, handleDelete}) => {
  return (
    <section className='task-column'>
        <h2 className='task-column-heading'>{heading}</h2>
        {
          tasks.map((task, index)=>{
            return task.status === status && <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}/>
          })
        }
    </section>
  )
}

export default TaskColumn