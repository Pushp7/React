import React, { useState } from 'react'
import "./TaskForm.css"
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })

    const handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target

        setTaskData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks((prev)=> {
            return [...prev, taskData]
        })
        // console.log(taskData);
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        })
    }

    const checkSelectedTag = (tag) => {
        return taskData.tags.includes(tag)
    }

    const selectTag = (tag) => {
        if(taskData.tags.indexOf(tag) !== -1) {
            const filteredTags = taskData.tags.filter((item) => item !== tag)
            setTaskData((prev) => {
                return {...prev, tags: filteredTags }
            })
        }
        else {
            setTaskData((prev) => {
                return {...prev, tags: [...prev.tags, tag] }
            })
        }
    }
    // console.log(taskData.tags);

    return (
        <header className='app-header'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter your project'
                    className='task-input'
                    name='task'
                    value={taskData.task}
                    onChange={handleChange}
                />
                <div className='task-form-bottom'>
                    <div>
                        <Tag tagName="HTML" selectTag={selectTag} selected={checkSelectedTag("HTML")} />
                        <Tag tagName="CSS" selectTag={selectTag} selected={checkSelectedTag("CSS")} />
                        <Tag tagName="Javascript" selectTag={selectTag} selected={checkSelectedTag("Javascript")} />
                        <Tag tagName="React" selectTag={selectTag} selected={checkSelectedTag("React")} />
                        <Tag tagName="Express" selectTag={selectTag} selected={checkSelectedTag("Express")} />
                    </div>
                    <div>
                        <select className='task-status' name='status' value={taskData.status} onChange={handleChange}>
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>

                        <button type='submit' className='task-submit' disabled={taskData.task.length <= 3 || taskData.tags.length < 1}> + Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm