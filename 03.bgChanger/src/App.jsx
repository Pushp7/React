import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div id="main" className="w-full h-screen" style={{ backgroundColor: color }}>

        <div className='w-max flex flex-wrap items-center justify-between gap-4 bg-white shadow-md shadow-slate-700 px-4 py-4 rounded-xl absolute bottom-12 left-1/2 -translate-x-1/2'>
          <button onClick={() => setColor("#ef4444")} className='px-4 py-1 bg-red-500 rounded-3xl text-white shadow-md'>Red</button>
          <button onClick={() => setColor("#22c55e")} className='px-4 py-1 bg-green-500 rounded-3xl text-white shadow-md'>Green</button>
          <button onClick={() => setColor("#3b82f6")} className='px-4 py-1 bg-blue-500 rounded-3xl text-white shadow-md'>Blue</button>
          <button onClick={() => setColor("#808000")} className='px-4 py-1 bg-[#808000] rounded-3xl text-white shadow-md'>Olive</button>
          <button onClick={() => setColor("#4b5563")} className='px-4 py-1 bg-gray-600 rounded-3xl text-white shadow-md'>Gray</button>
          <button onClick={() => setColor("#facc15")} className='px-4 py-1 bg-yellow-400 rounded-3xl text-black shadow-md'>Yellow</button>
          <button onClick={() => setColor("#ec4899")} className='px-4 py-1 bg-pink-500 rounded-3xl text-white shadow-md'>Pink</button>
          <button onClick={() => setColor("#a855f7")} className='px-4 py-1 bg-purple-500 rounded-3xl text-white shadow-md'>Purple</button>
          <button onClick={() => setColor("#E6E6FA")} className='px-4 py-1 bg-[#E6E6FA] rounded-3xl text-black shadow-md'>Lavender</button>
          <button onClick={() => setColor("white")} className='px-4 py-1 bg-white rounded-3xl text-black shadow-md'>White</button>
          <button onClick={() => setColor("black")} className='px-4 py-1 bg-black rounded-3xl text-white shadow-md'>Black</button>
        </div>

      </div>
    </>
  )
}

export default App
