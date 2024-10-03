import UserContexProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {
  return (
    <UserContexProvider>
    <h1>Context API</h1>
    <Login/>
    <Profile/>
    </UserContexProvider>
  )
}

export default App
