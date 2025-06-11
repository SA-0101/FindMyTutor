import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex flex-col items-center px-12 py-12 bg-[#1E90FF] text-white text-xl'>
         <div className='flex items-baseline justify-evenly max-w-full h-[300px] gap-5'>
            <div className='w-[400px] h-[200px] flex gap-4 flex-col items-baseline justify-evenly text-left'>
                <h1 className='text-3xl font-semibold py-3'>SkillSkout</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  aliqua. Ut enim ad d </p>
               
                <NavLink to="/ContactUs">
                <button className='bg-white text-[#1E90FF] px-5 py-2 rounded-xl'>Contact us</button>
                </NavLink>
                
          
          
            </div>

            <div className='w-[299px] h-[200px] flex flex-col items-baseline gap-2 text-xl'>
                <h1 className='text-3xl font-semibold py-3'>Company</h1>
                <p>About us</p>
                <p>Service</p>
                <p>Community</p>
                <p>Testimonial</p>
            </div>

            <div className='w-[299px] h-[200px] flex flex-col items-baseline gap-2'>
            <h1 className='text-3xl font-semibold py-3'>Links</h1>
                <p>Courses</p>
                <p>Become A Teacher</p>
                <p>Services</p>
                <p>All in One</p>
            </div>

            <div className='w-[299px] h-[200px] flex flex-col items-baseline py-3 gap-2 '>
            <h1 className='text-3xl font-semibold py-3'>Support</h1>
                <p>Help Center</p>
                <p>Webnier</p>
                <p>Feedback</p>
            </div>

            <div className='w-[299px] h-[200px] flex flex-col items-baseline py-3 gap-2'>
                <h1 className='text-3xl font-semibold py-3'>Contact Us</h1>
                <p>+1(555)123-4357</p>
                <p>etechinfo@gmail.com</p>
            </div>
        </div> 
            <hr />
        <div className='text-2xl font-semibold'>Copyright @ 2024 All Rights Reserved</div>
    </div>
  )
}

export default Footer
