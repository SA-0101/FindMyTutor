import { FaChalkboardTeacher} from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

function Tutors() {
  return (
    <div className='w-full flex flex-col items-center gap-5 px-5 py-2'>
            <div className='bg-green-200 flex flex-col items-center gap-2 px-5 py-2'>
                <FaChalkboardTeacher size={30} color='blue'/>
                <h1 className='text-4xl font-bold'>Teacher Management</h1>
                <h1>Manage and Organize your teaching Staff</h1>
            </div>
            <div className='bg-blue-200 flex flex-col items-center px-5 py-2'>
              <h1>All Teachers</h1>
              <h1>6</h1>
            </div>
            <div className='w-[300px] flex justify-center items-center gap-2 border border-black rounded-sm px-2 py-1'>
                <FaSearch />
               <input className='w-full outline-0' type="text" name="" id="" placeholder='Search by name or subject...'/>
            </div>
           
           {/* Profiles */}
            <div className='bg-fuchsia-200 w-full'>

              <div className='flex flex-1 flex-wrap gap-5'>
                      {/* {filteredTeachers.length > 0 ? (
                        filteredTeachers.map((e) => (
                          <div key={e._id} className='flex flex-col flex-1 justify-center min-w-[300px] max-w-[400px] bg-white px-8 py-4 rounded-xl'>
              
                            <div className='flex flex-col justify-center items-center gap-2'>
                              <img className='w-28 h-28 rounded-full' src={e.img} alt={e.name} />
                              <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-xl font-semibold'>{e.teacherName}</h1>
                                <p className='font-semibold'>Tutor</p>
                                <h1>{e.rating}({e.ratingCount})</h1>
                              </div> 
                            </div>
              
                            <div className='flex flex-col gap-3 py-2'>
                              <div className='flex gap-2 rounded-sm px-1 py-1 bg-blue-100'>
                                <h1>📚</h1>
                                <h1>{e.subject}</h1>
                              </div>
              
                              <div className='flex gap-2 rounded-sm px-1 py-1'>
                                <h1>🧑‍🏫</h1>
                                <h1>{e.isInstantTutor? "Instant Tutor" : "Regular Tutor"}</h1>
                              </div>
              
              
                              <div className='flex gap-2 px-1 py-1'>
                                <h1>📞</h1>
                                <h1>{e.contact}</h1>
                              </div>
              
                              <div className='flex gap-2 px-1 py-1'>
                                <h1>👔</h1>
                                <h1>{e.experience} Years</h1>
                              </div>
                             <div className='flex gap-2 px-1 py-1'>
                                <h1>📍</h1>
                                <h1>{e.location}</h1>
                              </div>
                              
                              <div className='flex flex-col gap-3'>
                               <div className='flex justify-between'>
                                <button className='bg-blue-400 rounded-full text-xl px-8 py-1'>Chat</button>
                                <button className='bg-green-400 rounded-full text-xl px-5 py-1' onClick={()=>{window.open(`https://wa.me/${e.contact}`, "_blank")}}>Whatsapp</button>
                               </div>
              
                               <div className='flex justify-between'>
                                <button className='bg-[#1E90FF] text-white rounded-full px-10 py-1 text-xl'>Visit Profile</button>
                                 <img src={heart} alt="heart icon" onClick={()=>{saveTeachers(e)}}/>
                                </div> 
                                
                              </div> 
                            </div>
              
                          </div>
                        ))
                      ) : (
                        <div className='text-lg text-gray-500'>No teachers found in this category.</div>
                      )} */}
                    </div>  

            </div>

    </div>
  )
}

export default Tutors
