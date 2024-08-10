import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider, useRouteError } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Startframework from './Components/StartFramework/Startframework'




const router = createBrowserRouter([
  { path: "",  element: <Layout />, 
    children:[
      {  path: "startframework",  element: <Startframework/> },
    { path: "about",  element: <About /> },
    { path: "portfolio",  element: <Portfolio /> },
    { path: "contact",  element: <Contact /> },
  ] },
 
 
])

function App() {
  const [count, setCount] = useState(0)

  return <>

  <RouterProvider router={router}></RouterProvider>
  
  </>
}

export default App
