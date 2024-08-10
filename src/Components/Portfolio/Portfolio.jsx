import React from 'react'
import img1 from '../../imgs/poert1.png'
import img2 from '../../imgs/port2.png'
import img3 from '../../imgs/port3.png'
export default function Portfolio() {
  return <>

<div className="title pt-20 ">
<h1>portfolio component</h1>


</div>
<div className="flex gap-4 justify-center pt-5">
  <div className='bg-slate-950  line block'></div>
  <i class="fa-solid fa-star"></i>
  <div className='bg-slate-950  line block'></div>
 
</div>
  <div className="py-20">
  
  <div className="md:flex justify-center  gap-6">
  <img src={img1} className='max-w-80 rounded-lg ' alt="port1" />
  
  <img src={img2} className='max-w-80 rounded-lg py-5' alt="port2" />
  <img src={img3} className='max-w-80 rounded-lg' alt="port3" />
  </div>
  <div className="md:flex justify-center gap-6 w-70 pt-6 ">
  <img src={img1} className='max-w-80 rounded-lg ' alt="port1" />
  <img src={img2} className='max-w-80 rounded-lg py-5' alt="port2" />
  <img src={img3} className=' max-w-80 rounded-lg' alt="port3" />
  </div>
  </div>


  
  </>
}
