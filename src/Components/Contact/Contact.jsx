import React from 'react'

export default function Contact() {
  return <>
  
<div className="title pt-20 ">
<h1>conatct section</h1>


</div>
<div className="flex gap-4 justify-center pt-5">
  <div className='bg-slate-950  line block'></div>
  <i class="fa-solid fa-star"></i>
  <div className='bg-slate-950  line block'></div>

</div>
<form class="max-w-md mx-auto py-10 text-black">

<input type="name" name="email" id="name" class="block pb-4 px-0 w-full text-sm text-gray-900  border-0 border-b-2   " placeholder=" userName" required />

<input type="age" name="age" id="age" class="block pb-5 px-0 w-full text-sm text-gray-900  border-0 border-b-2  " placeholder=" userAge" required />

  <input type="email" name="email" id="email" class="block pb-5  px-0 w-full text-sm text-gray-900  border-0 border-b-2  " placeholder=" userEmail" required />


  <input type="email" name="email" id="email" class="block pb-5  px-0 w-full text-sm text-gray-900  border-0 border-b-2  " placeholder="userPassword " required />  

  
</form>
<button type="submit" class="text-white bg-emerald-500 left-0  font-medium rounded-lg my-5  px-8 py-2.5 ">Send Message</button>

  
  </>
}
