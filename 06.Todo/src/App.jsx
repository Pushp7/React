import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [allTask, setAllTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(title);
    // console.log(desc);
    setAllTask([...allTask, { title, desc }])
    setTitle("")
    setDesc("")
    // console.log(allTask);
  }

  const deleteHandler = (i) => {
    let copyAllTask = [...allTask]
    copyAllTask.splice(i,1)
    setAllTask(copyAllTask)
  }

  let renderTask = <h2>No Task Yet</h2>

  if (allTask.length > 0) {
    renderTask = allTask.map((task, index) => {
      return <li key={index} className='flex justify-between items-center mb-4'>
        <div className='flex justify-between items-center w-3/4'>
          <h5>{task.title}</h5>
          <h5>{task.desc}</h5>
        </div>
        <button
        onClick={()=>{
          deleteHandler(index)
        }}
        className='bg-red-500 px-4 py-2 rounded cursor-pointer text-white'>Delete</button>
      </li>
    })
  }

  return (
    <div className='w-full h-screen bg-zinc-800'>
      <h1 className='bg-slate-700 text-white text-5xl font-bold text-center py-3'>My ToDo App</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className='text-xl border-zinc-400 border-4 m-8 px-4 py-2'
          placeholder='Enter Task Here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          type="text"
          className='text-xl border-zinc-400 border-4 m-8 px-4 py-2'
          placeholder='Task Description'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />
        <button className='bg-slate-600 text-white px-4 py-2 text-2xl rounded-lg'>Add Task</button>
      </form>
      <hr />
      <div className='w-full p-4 bg-slate-400'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default App