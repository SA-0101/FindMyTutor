import { useEffect,useState } from 'react';
import heart from '../../assets/Icons/Heart.png';
import { FaTrash } from "react-icons/fa";

function SavedTeachers() {

 const BASE_URL= "http://localhost:8000/tutor"

  const [savedteachersdata,setsavedTeachersdata]=useState([])
  console.log(savedteachersdata)
  
  const token=localStorage.getItem('token')
  const studentName=localStorage.getItem('studentname')
  const studentId=localStorage.getItem('studentId')


      {/*Save Teacher API call */}
      const getsavedTeachers=async ()=> {
     
          try {
            const response = await fetch(`${BASE_URL}/getSavedTeachers`,{
              method:"GET",
              headers:{
                'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
              }

            });
            
            const responsedata = await response.json();
      
            if (response.ok) {

              setsavedTeachersdata(responsedata.savedTeachers);  // Store the fetched data in state

            }
            else{
                alert(responsedata.message)
            }

          } catch (error) {
            console.error('Error:', error);
          }
        
      }

        useEffect(()=>{
          getsavedTeachers();
    },[])


    {/*Save Teacher API call */}
      const deletesavedTeacher=async (teacher)=> {

    // const removeTeacherData={

    //   teacherId:  teacher._id ,

    // }
     
          try {
            const response = await fetch(`${BASE_URL}/removeSaveTeacher/${teacher._id}`,{
              method:"DELETE",
              headers:{
                'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
              },
              // body: JSON.stringify(removeTeacherData)

            });
            
            const responsedata = await response.json();
      
            if (response.ok) {

              alert("Teacher Deleted");  // Store the fetched data in state
              getsavedTeachers()
            }
            else{
                alert(responsedata.message)
            }

          } catch (error) {
            console.error('Error:', error);
          }
        
      }

  return (
    <div className='flex flex-col gap-5 p-3'>

      {/* Greeting */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl text-[#1E90FF] font-semibold'>Saved Tutors</h1>
      </div>
      <hr />

      {/*Search Bar*/}

      <input className='bg-white px-3 py-3 outline-0 rounded-2xl' type="text" placeholder='Search Teachers here...'/>


      {/* Profiles Section */}
      <div className='text-2xl font-semibold'>Profiles</div>
      <div className='flex flex-1 flex-wrap gap-5'>
        {savedteachersdata.length > 0 ? (
          savedteachersdata.map((e) => (
            <div key={e._id} className='flex flex-col flex-1 justify-center min-w-[300px] max-w-[400px] bg-white px-8 py-4 rounded-xl'>

              <div className='flex flex-col justify-center items-center gap-2'>
                <img className='w-28 h-28 rounded-full' src={e.img} alt={e.name} />
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-xl font-semibold'>{e.teacherName}</h1>
                  <p className='font-semibold'>Tutor</p>
                  <h1>{e.rating}</h1>
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
                  <button className='bg-green-400 rounded-full text-xl px-5 py-1'>Whatsapp</button>
                 </div>

                 <div className='flex justify-between'>
                  <button className='bg-[#1E90FF] text-white rounded-full px-10 py-1 text-xl'>Visit Profile</button>
                  <FaTrash color="red" size={20} onClick={()=>{deletesavedTeacher(e)}}/>
                  </div> 
                  
                </div> 
              </div>

            </div>
          ))
        ) : (
          <div className='w-full text-lg text-gray-500'>No teachers Saved.</div>
        )}
      </div>  
    </div>
  );
}

export default SavedTeachers;


