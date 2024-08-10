import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return <>
  
  <Navbar/>

  <div className="container left-0 right-0">
    <Outlet/>
  </div>
   <Footer/>
  </>
}
