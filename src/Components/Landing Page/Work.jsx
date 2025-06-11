import React from 'react'
import profile from '../../assets/Time management-amico 2.png'
import signup from '../../assets/Location search-amico 2.png'
import connect from '../../assets/Education-amico 12.png'

function Works() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-auto py-10 px-6 bg-[#FFFFFF] '>
        <h1 id='Work' className='text-[32px] py-4 font-semibold text-center'>How It Works</h1>

        <div className='flex flex-1 flex-wrap justify-center items-center gap-9'>
           
            <div className='px-5 max-w-[250px] max-h-[270px] bg-[#EFF6FD] rounded-xl flex flex-col shrink grow justify-center items-center gap-3'>
                <img  src={profile} alt="img" />
                <h1 className='text-lg font-semibold'>Create Profile</h1>
            </div>

            <div className='px-5 max-w-[250px] max-h-[270px] bg-[#EFF6FD] rounded-xl flex flex-col shrink grow  justify-center items-center gap-3'>
                 <img src={signup} alt="img" />
                 <h1 className='text-lg font-semibold'>Sign Up</h1>
            </div>

            <div className='px-5 max-w-[250px] max-h-[270px] bg-[#EFF6FD] rounded-xl flex flex-col shrink grow  justify-center items-center gap-3'>
                <img src={connect} alt="img" />
                <h1 className='text-lg font-semibold text-center'>Connect & Start Learning</h1>
            </div>

        </div>

    </div>
  )
}

export default Works
