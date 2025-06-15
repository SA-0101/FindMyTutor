import { useEffect,useState } from 'react';
import heart from '../../assets/Icons/Heart.png';
import { Popular_Teachers } from '../../Data/Data';

function StudentCategory() {

 const BASE_URL= "http://localhost:8000/tutor"

  const [subject, setSubject] = useState("All"); // Empty = all categories
  const [teachersdata,setTeachersdata]=useState([])
  
  console.log(teachersdata)

  const token=localStorage.getItem('token')
  const studentName=localStorage.getItem('studentname')
  const studentId=localStorage.getItem('studentId')

  // // Filtering logic based on selected subject only
  const filteredTeachers = subject==="All" ? teachersdata:
 teachersdata.filter(
  (teacher) => teacher.subject === subject
);

      {/*Save Teacher API call */}
      const getTeachers=async ()=> {
     
          try {
            const response = await fetch(`${BASE_URL}/getRegisteredTeachers`,{
              method:"GET",
              headers:{
                'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
              }

            });
            
            const responsedata = await response.json();
      
            if (response.ok) {

              setTeachersdata(responsedata.registeredTeachers);  // Store the fetched data in state

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


    {/*Save Teacher API call */}
      const saveTeachers=async (teacher)=> {

    const saveTeacherData={

      studentId: studentId,
      teacherId:  teacher._id ,
      teacherName: teacher.teacherName,
      img:          teacher.img ,
      email:        teacher.email   ,
      contact:     teacher.contact   ,
      degree:      teacher.degree ,
      experience: teacher.experience,
      subject:     teacher.subject ,
      location:    teacher.location ,
      coordinates: teacher.coordinates,
      register:    teacher.register ,
      rating:      teacher.rating  ,
      isInstantTutor: teacher.isInstantTutor ,

    }
     
          try {
            const response = await fetch(`${BASE_URL}/saveTeacher`,{
              method:"POST",
              headers:{
                'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify(saveTeacherData)

            });
            
            const responsedata = await response.json();
      
            if (response.ok) {

              alert("Teacher Saved");  // Store the fetched data in state

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
        <h1 className='text-2xl text-[#1E90FF] font-semibold'>WellCome, {studentName}</h1>
      </div>


      {/*Search Bar*/}

      <input className='bg-white px-3 py-3 outline-0 rounded-2xl' type="text" placeholder='Search Teachers here...'/>

      {/* Categories */}
      <h1 className='text-2xl font-semibold'>All Categories</h1>
      <div className='flex flex-row flex-wrap gap-4 text-2xl font-semibold text-[#1E90FF]'>
        
        <button className='flex justify-center items-center border border-blue-400 px-2 py-0.5 rounded-xl' value="All" onClick={(e)=>{setSubject(e.target.value)}}>All</button>
        <button className='flex justify-center items-center border border-blue-400 px-2 py-0.5 rounded-xl' value="Computer Science" onClick={(e)=>{setSubject(e.target.value)}}>CS</button>
        <button className='flex justify-center items-center border border-blue-400 px-2 py-0.5 rounded-xl' value="Mathematics" onClick={(e)=>{setSubject(e.target.value)}}>Mathematics</button>
        <button className='flex justify-center items-center border border-blue-400 px-2 py-0.5 rounded-xl' value="Chemistry" onClick={(e)=>{setSubject(e.target.value)}}>Chemistry</button>
        <button className='flex justify-center items-center border border-blue-400 px-2 py-0.5 rounded-xl' value="Biology" onClick={(e)=>{setSubject(e.target.value)}}>Biology</button>
        <button className='flex justify-center items-center border border-blue-400 px-2 py-0.5 rounded-xl' value="English" onClick={(e)=>{setSubject(e.target.value)}}>English</button>
        <button className='flex justify-center items-center border border-blue-400 px-2 py-0.5 rounded-xl' value="Physics" onClick={(e)=>{setSubject(e.target.value)}}>Physics</button>
        <button className='flex justify-center items-center border border-blue-400 px-2 py-0.5 rounded-xl' value="History" onClick={(e)=>{setSubject(e.target.value)}}>History</button>
        <button className='flex justify-center items-center border border-blue-400 px-2 py-0.5 rounded-xl' value="Art and Design" onClick={(e)=>{setSubject(e.target.value)}}>Art and Design</button>
       
      </div>

      {/* Profiles Section */}
      <div className='text-2xl font-semibold'>Profiles</div>
      <div className='flex flex-1 flex-wrap gap-5'>
        {filteredTeachers.length > 0 ? (
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
                  <button className='bg-green-400 rounded-full text-xl px-5 py-1'>Whatsapp</button>
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
        )}
      </div>  
    </div>
  );
}

export default StudentCategory;


