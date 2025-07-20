import LandingPageImage from '../../assets/Tutor.png'

function LandingBanner() {
  return (
   <div className='flex pt-7 pb-5 bg-[#252525] h-auto items-center px-5 relative'> 
            <div className='w-[40%] pl-12 flex flex-col justify-start items-center'>
           
            <div className='flex flex-col gap-2'>
            <h1 className='text-3xl lg:text-4xl text-white font-bold'>Find Qualified <span className='text-3xl lg:text-4xl text-[#1E90FF] font-bold'>Teachers</span></h1>
            <h1 className='text-3xl lg:text-4xl text-white font-bold'>for Every Subject</h1>
            <h2 className='text-white'>Easily connect with expert educators for personalized learning solutions</h2>
            
                <input className='w-3/4 bg-white outline-0 mt-8 h-10 rounded-3xl px-3' type="text" name="" id="" placeholder='Search' />
            </div>
            </div>

            <div className=' w-[60%] flex'>
            <img className='hidden md:h-full md:block' src={LandingPageImage} alt="" />
            </div>
            
            <div className='w-[50px] h-[50px] bg-[#1E90FF] right-36 rounded-[100%] absolute top-16 md:top-40 '></div>
            <div className='w-[40px] h-[40px] bg-yellow-300 rounded-[100%] absolute top-40 left-[500px]'></div>
            <div className='w-8 h-8 rounded-full  border-orange-500 border-[6px] bg-[#252525] absolute right-28 top-44 md:right-28 md:top-64 lg:right-40'></div>
            <div className='w-[40px] h-[40px] bg-[#FF725E] rounded-[100%] absolute top-20 left-96 md:top-56 md:left-96 lg:left-[700px]'></div>
        </div>
  )
}

export default LandingBanner
