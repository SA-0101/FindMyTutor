import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex relative top-0 max-w-full bg-[#252525] justify-between items-center gap-10 px-14 py-3'>
        <div className='text-[25px] text-white font-semibold'>Logo</div>
        <ul className='flex flex-wrap w-[950px] h-[56px] justify-between items-center text-white text-[15px]'>
            <div className='hidden lg:block lg:w-8 lg:h-8 lg:rounded-full lg:border-orange-500 lg:border-[6px] lg:bg-[#252525]'></div>
            <li className='hidden md:block md:hover:text-green-500'>
              <a href="#Home">
              Home
              </a>
            </li>

            <li className='hidden md:block md:hover:text-green-500'>
              <a href="#About">About Us</a>
              
              </li>

            <li className='hidden md:block md:hover:text-green-500'>
              <a href="#Features">
              Features
              </a>
              
              </li>

            <li className='hidden md:block md:hover:text-green-500'>
              <a href="#Work">
              How It Works
              </a>
              </li>

            <li className='hidden md:block md:hover:text-green-500'>
              <a href="#Contact">
              Contact
              </a>
              </li>
            <div className='flex flex-row justify-end items-end gap-2'>

            <li>
                <button className='text-[#1E90FF] border-[#1E90FF] border-[2px] rounded-[110px] font-semibold px-5 py-1 lg:px-8 lg:py-2'>
                        <NavLink to="/Login">
                          Login
                        </NavLink>
                </button></li> 
            <li>
                <button className='bg-[#1E90FF] rounded-[110px] font-semibold px-5 py-1.5 lg:px-8 lg:py-2.5'>
                  <NavLink to="/Register">
                    Register
                  </NavLink>  
                    </button></li>
            </div>
           
        </ul>
    </nav>
  )
}

export default Navbar
