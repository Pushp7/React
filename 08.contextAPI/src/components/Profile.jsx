import React, {useContext} from 'react'
import UserContex from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContex)
  if(!user){
      return <div>Please login</div>
  }
  else
    return <div> <h1>Welcome, {user.username}</h1> </div>
}

export default Profile
