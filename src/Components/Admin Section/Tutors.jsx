import { useEffect,useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {Users,Trash2} from 'lucide-react'
function Tutors() {

            const BASE_URL= "http://localhost:8000/tutor"
            const [teachersdata,setTeachersdata]=useState([])
            const token = localStorage.getItem('token')
            console.log(teachersdata)

        {/* Getting Teachers */}
             const getTeachers=async ()=> {
                 
                      try {
                        const response = await fetch(`${BASE_URL}/getAllTeachers`,{
                          method:"GET",
                          headers:{
                            'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                          }
            
                        });
                        
                        const responsedata = await response.json();
                  
                        if (response.ok) {
            
                          setTeachersdata(responsedata.teachers);  // Store the fetched data in state
            
                        }
                        else{
                            alert(responsedata.message)
                        }
            
                      } catch (error) {
                        console.error('Error:', error);
                      }
                    
                  }
            
                    useEffect(()=>{
                      getTeachers();
                },[])

        
                {/* Delete API Call */}

      const deleteTeachers = async (teacherId) => {
  try {
    const response = await fetch(`${BASE_URL}/deleteTeacher/${teacherId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("Teacher deleted successfully");
      getTeachers(); // Re-fetch the student list after deletion
    } else {
      alert(responseData.message);
    }
  } catch (error) {
    console.error("Delete error:", error);
  }
};


  return (
    <div className='w-full flex flex-col items-center gap-5 px-5 py-2'>
            <div className='flex flex-col items-center gap-2 px-5 py-2'>
                 <Users className="w-14 h-14 px-2 py-2 text-white bg-blue-500 rounded-lg" />
                <h1 className='text-4xl font-bold'>Teacher Management</h1>
                <h1>Manage and Organize your teaching Staff</h1>
            </div>
            <div className='bg-blue-500 flex flex-col items-center px-5 py-2 text-white rounded-lg border border-gray-300 shadow-sm'>
              <h1 className='font-semibold'>All Teachers</h1>
              <h1>{teachersdata.length}</h1>
            </div>
            <div className='w-[300px] flex justify-center items-center gap-2 border border-black rounded-sm px-2 py-1'>
                <FaSearch />
               <input className='w-full outline-0' type="text" name="" id="" placeholder='Search by name or subject...'/>
            </div>
           
           {/* Profiles */}
            <div className='w-full'>

              <div className='flex flex-1 flex-wrap gap-5'>
                      {teachersdata.length > 0 ? (
                        teachersdata.map((teacher) => (
                          <div key={teacher._id} className='flex flex-col flex-1 justify-center min-w-[300px] max-w-[400px] bg-white px-8 py-4 rounded-xl border border-gray-300 shadow-sm'>
              
                            <div className='flex flex-col justify-center items-center gap-2'>
                              <img className='w-28 h-28 rounded-full' src={teacher.img} alt={teacher.name} />
                              <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-xl font-semibold'>{teacher.teacherName}</h1>
                                <p className='font-semibold'>Tutor</p>
                                
                              </div> 
                            </div>
              
                            <div className='flex flex-col gap-3 py-2'>
                              <div className='flex gap-2 rounded-sm px-1 py-1 bg-blue-100'>
                                <h1>📚</h1>
                                <h1>{teacher.subject}</h1>
                              </div>
              
                              <div className='flex gap-2 rounded-sm px-1 py-1'>
                                <h1>🧑‍🏫</h1>
                                <h1>{teacher.isInstantTutor? "Instant Tutor" : "Regular Tutor"}</h1>
                              </div>
              
              
                              <div className='flex gap-2 px-1 py-1'>
                                <h1>📞</h1>
                                <h1>{teacher.contact}</h1>
                              </div>
              
                              <div className='flex gap-2 px-1 py-1'>
                                <h1>🖂</h1>
                                <h1>{teacher.email}</h1>
                              </div>
                             <div className='flex gap-2 px-1 py-1'>
                                <h1>📍</h1>
                                <h1>{teacher.location}</h1>
                              </div>
                              
                              <div className='flex flex-col items-center'>
                                  <Trash2 size={24} className="text-red-500 cursor-pointer" onClick={()=>{deleteTeachers(teacher._id)}}/>
                              </div>
                                
                            </div>
              
                          </div>
                        ))
                      ) : (
                        <div className='w-full flex justify-center items-center py-2 text-lg text-gray-500'>No Teachers Found</div>
                      )}
                    </div>  

            </div>

    </div>
  )
}

export default Tutors
