
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from './RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Params from './components/Params/Params.jsx';
import Github, {githubInfoLoader} from './components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout/>,
//     children: [
//       { path: "", 
//         element: <Home/> 
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])


//Another routing way:-
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:param' element={<User/>} />
      <Route path='/params/:param1/:param2' element={<Params/>} />
      <Route path='/github' element={<Github/>} loader={githubInfoLoader} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
