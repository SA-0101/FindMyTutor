import React from 'react'
import About1 from '../../assets/About1.png'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className='flex flex-col justify-between items-center w-full h-auto bg-slate-50 px-5 py-10'>
      
      <div >
        <h1 id='About' className='py-4 text-center text-3xl font-semibold' >About Us</h1>
        <h1 className='py-3'>Get information from here who you become the memeber of our team</h1>
      </div>
      <div className='flex w-full h-full justify-center items-center px-12 gap-10'>
          <div className='flex flex-col justify-center items-center max-w-[50%] gap-3 px-5 '>
            
            <h1 className='text-2xl'>SkillSkout providing the best opportunities to the students around the glob.</h1>
            <h1>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store.</h1>
            <h1>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory.</h1>

            <button className='text-white bg-[#1E90FF] w-[80%] py-2 rounded-3xl'>
              <NavLink to="/SignUpPage">
                 Join Us
              </NavLink>
              </button>
          
          </div>
          <div className='w-[50%]'>
            <img className='w-[450px] h-[350px] rounded-xl' src={About1} alt="img1" />
            {/* <img className='absolute' src={About2} alt="img2" /> */}
          </div>
      </div>

    </div>
  )
}

export default About
