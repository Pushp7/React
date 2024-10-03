import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const { param1, param2 } = useParams()
    return (
        <div className='w-full h-96 text-center content-center'>
            <h1 className='text-5xl'>This is {param1}'s {param2} 👋</h1>
        </div>
    )
}

export default Params
