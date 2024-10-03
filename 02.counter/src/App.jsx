import { useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const increase = () => {
    if (count < 20)
      setCount(count + 1)
  }

  const decrease = () => {
    if (count > 0)
      setCount(count - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Counter range  0 - 20</p>
      <div>Counter: {count}</div>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
    </>
  )
}

export default App
