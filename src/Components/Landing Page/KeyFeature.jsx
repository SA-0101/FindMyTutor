import React from 'react'
import degree from '../../assets/graduation-hat.png'
import learning from '../../assets/book.png'
import scheduling from '../../assets/documents.png'

function KeyFeature() {
  return (
    <div className='max-w-full h-auto py-12 px-6 bg-[#FFFFFF] text-center'>
        <h1 id='Features' className='text-[32px] font-semibold py-4'>Key Features Section</h1>
        <h2 className='text-lg py-4 font-semibold'>Our mission is provide high-quality education accessible to everyone anywhere</h2>
        <div className='flex flex-1 flex-wrap justify-center items-center max-w-full h-auto gap-6'>

            <div className='w-[250px] h-[270px] bg-[#FEF6E8] rounded-xl flex flex-col justify-center items-center gap-5 px-5'>
                <div className='w-[100px] h-[100px] bg-[#F9A519] rounded-[100%] flex justify-center items-center'><img className='w-[65px] h-[65px]' src={degree} alt="" /></div>
                <div>
                <h1 className='font-bold'>Qualified Teachers</h1>
                <h1 className='text-[15px] text-center'>All educators go through background checks and profile verification</h1>
                </div>
                
            </div>
            
            <div className='w-[250px] h-[270px] bg-[#FFF7F7] rounded-xl flex flex-col justify-center items-center gap-5 px-5'>
                <div className='w-[100px] h-[100px] bg-[#FFAEAE] rounded-[100%] flex justify-center items-center'><img className='w-[65px] h-[65px]' src={learning} alt="" /></div>
                <div>
                <h1 className='font-bold'>Customized Learning</h1>
                <h1 className='text-[15px] text-center'>All educators go through background checks and profile verification</h1>
                </div>
                
            </div>
            
            <div className='w-[250px] h-[270px] bg-[#E6F2FF] rounded-xl flex flex-col justify-center items-center gap-5 px-5'>
                <div className='w-[100px] h-[100px] bg-[#007BFF] rounded-[100%] flex justify-center items-center'><img className='w-[65px] h-[65px]' src={scheduling} alt="" /></div>
                <div>
                <h1 className='font-bold'>Seamless Scheduling</h1>
                <h1 className='text-[15px] text-center'>All educators go through background checks and profile verification</h1>
                </div>
                
            </div>

            <div className='w-[250px] h-[270px] bg-[#F2F2F8] rounded-xl flex flex-col justify-center items-center gap-5 px-5'>
                <div className='w-[100px] h-[100px] bg-[#7B82B4] rounded-[100%] flex justify-center items-center'><img className='w-[65px] h-[65px]' src={learning} alt="" /></div>
                <div>
                <h1 className='font-bold'>Location Matching</h1>
                <h1 className='text-[15px] text-center'>All educators go through background checks and profile verification</h1>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default KeyFeature
