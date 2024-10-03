import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



const Github = () => {
    const data = useLoaderData()
    

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/pushp7")
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         setData(data)
    //     })
    // }, [])


    return (
        <div className='text-center flex flex-col items-center justify-center gap-6 m-4 bg-gray-600 text-white p-4 text-3xl'>
            <h1>GitHub followers: {data.followers}</h1>
            <img src={data.avatar_url} className='w-[300px]' alt="github profile pic" />    
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/pushp7")
    return res.json()
}