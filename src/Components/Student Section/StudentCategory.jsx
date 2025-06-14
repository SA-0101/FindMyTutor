import { useEffect,useState } from 'react';
import heart from '../../assets/Icons/Heart.png';
import { Popular_Teachers } from '../../Data/Data';

function StudentCategory() {

 const BASE_URL= "http://localhost:8000/tutor"

  const [subject, setSubject] = useState(""); // Empty = all categories
  const [teachersdata,setTeachersdata]=useState([])
  
  const token=localStorage.getItem('token')
  console.log(teachersdata)

  

  // // Filtering logic based on selected subject only
  const filteredTeachers = Popular_Teachers.filter((e) => {
    return subject === "" || e.Subject === subject;
  });

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

              setTeachersdata(responsedata);  // Store the fetched data in state

            }
            else{
                console.log(responsedata.message)
            }

          } catch (error) {
            console.error('Error:', error);
          }
        
      }
    
    useEffect(()=>{
          getTeachers();
    },[])

  return (
    <div className='flex flex-col gap-5 p-3'>

      {/* Greeting */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl text-[#1E90FF] font-semibold'>Good Morning, Shaan Aslam</h1>
      </div>


      {/*Search Bar*/}

      <input className='bg-white px-3 py-3 outline-0 rounded-2xl' type="text" placeholder='Search Teachers here...'/>

      {/* Categories */}
      <h1 className='text-2xl font-semibold'>All Categories</h1>
      <div className='flex flex-row flex-wrap gap-4 text-2xl font-semibold text-[#1E90FF]'>
        
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
            <div key={e.name} className='flex flex-col flex-1 min-w-[300px] bg-white px-8 py-4 rounded-xl'>

              <div className='flex flex-col justify-center items-center gap-2'>
                <img className='w-28 h-28 rounded-full' src={e.image} alt={e.name} />
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-xl font-semibold'>{e.name}</h1>
                  <p className='font-semibold'>Teacher</p>
                </div> 
              </div>

              <div className='flex flex-col gap-2 py-2'>
                <div className='flex justify-between text-start'>
                  <h1>Subject</h1>
                  <h1>{e.Subject}</h1>
                </div>
                <div className='flex justify-between'>
                  <h1>Experience</h1>
                  <h1>{e.Experiance}</h1>
                </div>
                <div className='flex justify-between'>
                  <h1>Location</h1>
                  <h1>{e.City}</h1>
                </div>
                <div className='flex justify-between'>
                  <h1>Distance</h1>
                  <h1>{e.Distance}</h1>
                </div>
                <div className='flex justify-between'>
                  <img src={heart} alt="heart icon" />
                  <button className='bg-[#1E90FF] text-white rounded-full px-10 py-1 text-xl'>Contact</button>
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


