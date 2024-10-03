import { useEffect, useState } from 'react'
import './App.css'
import TaskColumn from './components/TaskColumn'
import TaskForm from './components/TaskForm'


function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem('tasks'))
    if(savedTask && savedTask.length>0){
      setTasks(savedTask)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // const handleDelete = (taskIndex) => {
  //   const copyAlltask = [...tasks]
  //   copyAlltask.splice(taskIndex, 1)
  //   setTasks(copyAlltask)
  // }

  const handleDelete = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex)
    setTasks(updatedTasks)
  }

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <main className='app-main'>
        <TaskColumn heading="🎯 To do" tasks={tasks} status="todo" handleDelete={handleDelete} />
        <TaskColumn heading="🏃‍♀️ Doing" tasks={tasks} status="doing" handleDelete={handleDelete} />
        <TaskColumn heading="✅ Done" tasks={tasks} status="done" handleDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App