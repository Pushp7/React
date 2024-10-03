import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <div className='task-card'>
      <p className='task-text'>{title}</p>
      <div className='task-card-bottom'>
        <div className='task-card-tags'>
          {
            tags.map((tag, index) => <Tag key={index} tagName={tag} selected={true} />)
          }
        </div>
        <div className='task-delete' onClick={() => handleDelete(index)}>
          <img src={deleteIcon} alt="Delete" className='delete-icon' />
        </div>
      </div>
    </div>
  )
}

export default TaskCard