import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { param } = useParams()
    return (
        <div className='w-full h-96 text-center content-center'>
            <h1 className='text-5xl'>Hello, {param} 👋</h1>
        </div>
    )
}

export default User
