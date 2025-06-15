import React from 'react'
import { NavLink } from 'react-router-dom'

function ContactUs() {
  return (
    <div className='flex justify-center items-center w-full h-lvh bg-[#FAFAFA]'>
      
      <div className='flex flex-col justify-evenly items-centerS bg-white h-[550px] w-[550px] border-[10855845s] border-[2px]'>
      
      <div className='flex flex-col justify-evenly w-full h-full items-center px-5 py-5'>

      <div className='flex flex-col justify-center items-center gap-3'>
        <h1 className='text-3xl text-black font-semibold border-[3px] px-2 py-2 border-[10855845s]'>CONTACT US</h1>
        
        </div>
        
        <div className='flex flex-col justify-center items-center gap-8'>
            
        <input type="text" placeholder='Your Name' className='w-[350px] h-[30px] placeholder-black bg-white  border-t-0 border-l-0 border-r-0 border-b-2 border-black outline-none'/>
        <input type="text" placeholder='Your Email' className='w-[350px] h-[30px] placeholder-black bg-white border-t-0 border-l-0 border-r-0 border-b-2 border-black outline-none'/>
        <input type="text" placeholder='Your Message' className='w-[350px] h-[30px] placeholder-black bg-white border-t-0 border-l-0 border-r-0 border-b-2 border-black outline-none'/>
        </div>
        
        <div className='flex flex-col justify-center'>
            <button className='border text-black font-semibold border-black px-5 py-2'>Submit</button>
            <NavLink to="/">
                <button className='text-blue-500 font-semibold  px-5 py-2'>⬅ Back to main</button>
            </NavLink>
             
        </div>


      </div>

      </div>

    </div>
  )
}

export default ContactUs
