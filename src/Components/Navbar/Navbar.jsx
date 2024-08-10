import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return <>

    <div className=" navbar z-50 fixed left-0 right-0 scroll-smooth top-0 w-full bg-slate-700 text-white flex rounded-lg  font-semibold justify-between my-auto ">
      <div className="logo my-auto">
      <a href="Startframework">START FRAMEWORK </a>
      
    
      </div>
   
    <ul className=" nav flex my-auto">
    <li className='px-8 '><NavLink to="about">ABOUT</NavLink></li>
    <li className='px-8'><NavLink to="portfolio">PORTFOLIO</NavLink></li>
    <li className='px-8'><NavLink to="contact">CONTACT</NavLink></li>
    </ul>
   
    
    </div>

 
  
  </>
}
