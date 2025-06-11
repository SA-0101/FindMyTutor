import { Popular_Catogorie } from '../../Data/Data'

function Categories() {

  return (
    <div className='max-w-full h-auto flex flex-col items-center gap-8 py-10 bg-white'>
        <h1 className='text-center text-3xl font-semibold py-2'>Popular Categories</h1>
        <div className='h-auto flex flex-1 flex-wrap justify-center items-center gap-5'>

            {
              
              Popular_Catogorie.filter((e)=> e.Popular==true)
                .map((e,index)=> 
                 <div key={index} className='flex flex-col  items-center  shadow-[0px_4px_20px_#2626261F] gap-1 w-[350px] rounded-xl px-5 h-[370px] py-5 bg-white'>
                <img className='rounded-xl w-full h-48' src={e.image} alt="img" />
                <h1 className='text-[28px] font-semibold py-2'>{e.Subjectname}</h1>
                <p className='text-center text-[#A5A5A5]'>{e.Description}</p>
                     </div>
                )
                
            }
            

        </div>

    </div>
  )
}

export default Categories
