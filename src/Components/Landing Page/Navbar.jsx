import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex relative top-0 max-w-full bg-[#252525] justify-between items-center px-14 py-3'>
        <div className='text-[25px] text-white font-semibold'>Logo</div>
        <ul className='flex flex-wrap w-[950px] h-[56px] justify-between items-center text-white text-[15px]'>
            <div className='w-8 h-8 rounded-full  border-orange-500 border-[6px] bg-[#252525]'></div>
            <li className='hover:text-green-500'>
              <a href="#Home">
              Home
              </a>
            </li>

            <li className='hover:text-green-500'>
              <a href="#About">About Us</a>
              
              </li>

            <li className='hover:text-green-500'>
              <a href="#Features">
              Features
              </a>
              
              </li>

            <li className='hover:text-green-500'>
              <a href="#Work">
              How It Works
              </a>
              </li>

            <li className='hover:text-green-500'>
              <a href="#Contact">
              Contact
              </a>
              </li>
            <div className='flex gap-2'>

            <li >
                <button className='text-[#1E90FF] border-[#1E90FF] border-[2px] w-[110px] h-[40px] rounded-[100px] px-2'>
                        <NavLink to="/Login">
                          Login
                        </NavLink>
                </button></li> 
            <li>
                <button className='bg-[#1E90FF] w-[100px] h-[40px] rounded-[110px] px-2'>
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
