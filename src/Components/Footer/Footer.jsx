import React from 'react'

export default function Footer() {
  return <>
  <div className="w-full  footer bg-slate-600 text-white md:flex justify-between items-center p-20 xxl:flex-wrap ">
    <div className="">
      <h2 className='font-bold'>LOCATION</h2>
      <h5>2215 John Daniel Drive</h5>
      <h5>Clark, MO 65243</h5>
    </div>
    <div className="">
      <h2 className='font-bold'>AROUND THE WEB</h2>
 <div className="social">
 <a href="#"><i className="fab fa fa-facebook-f "></i></a>
        
        <a href="#"><i className="fab fa fa-twitter"></i></a>
        
        
        <a href=""> <i class="fa-brands fa-linkedin-in"></i></a>
      
        <a href=""><i class="fa-solid fa-globe"></i></a>
 </div>
    </div>
    <div className="">
      <h2 className='font-bold '>ABOUT FREELANCER</h2>
      <p>Freelance is a free to use, licensed Bootstrap theme <br></br> created by Route</p>
    </div>
    </div>

  
  <div className="copy bg-slate-900 text-white p-5">
    <p>Copyright © Your Website 2021</p>
  </div>
  
  </>
}
