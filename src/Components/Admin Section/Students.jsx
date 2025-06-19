import {Users} from "lucide-react"
import { useEffect,useState } from "react"

function Students() {

    const BASE_URL= "http://localhost:8000/tutor"

    const [studentsdata,setStudentsdata]=useState([])
    const token = localStorage.getItem('token')
    console.log(studentsdata)

     const getStudents=async ()=> {
         
              try {
                const response = await fetch(`${BASE_URL}/getAllStudents`,{
                  method:"GET",
                  headers:{
                    'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                  }
    
                });
                
                const responsedata = await response.json();
          
                if (response.ok) {
    
                  setStudentsdata(responsedata);  // Store the fetched data in state
    
                }
                else{
                    alert(responsedata.message)
                }
    
              } catch (error) {
                console.error('Error:', error);
              }
            
          }
    
            useEffect(()=>{
              getStudents();
        },[])

  return (
    <div className='w-full flex flex-col gap-8'>
            
          <div className='w-full flex flex-col rounded-lg py-3 gap-2 border border-gray-300 shadow-sm'>
                <div className="w-full flex justify-between items-center px-5">
                  <div className='flex items-center gap-2'>
                    <Users className="w-10 h-10 text-white bg-blue-500 px-2 py-1 rounded-lg" />
                      <div>
                        <h1 className='text-2xl font-bold'>Notifications</h1>
                        <h1>Manage your notifications and stay connected</h1>
                      </div>
                    
                  </div>
                  
                    <button className="bg-green-500 px-3 h-8 rounded-lg text-white">Refresh</button>
                  
                </div>
                <div className="w-full px-5 py-2">
                    <input className="w-full outline-0 border border-black bg-blue-100 px-2 py-2 rounded-lg" type="text" name="" id="" placeholder='Search student by name...'/>
                </div>
          </div>


      <div className="w-full flex justify-between items-center px-5 rounded-lg py-3 gap-2 border border-gray-300 shadow-sm">
                  <div className='flex flex-col items-center gap-2'>

                      <div>
                        <h1 className='font-bold'>Total Students</h1>
                        <h1>Student Array Length</h1>
                      </div>
                    
                  </div>
                  
                    <Users className="w-10 h-10 text-white bg-blue-400 px-2 py-1 rounded-lg" />

      </div>

      {/* Third Section means table */}

        <div className="w-full py-3">

        <table className="w-full rounded-lg gap-2 border border-gray-300 shadow-sm">
          <th className="flex justify-between px-5">
            <tr>STUDENT</tr>
            <tr>CONTACT INFO</tr>
            <tr>ADDRESS</tr>
            <tr>ACTIONS</tr>
          </th>
          <tbody className="flex justify-between px-5">
            <tr className="flex items-center gap-3 py-2 px-5">
              <img src="" alt="img" />
              <div className="flex flex-col">
                <h1>Shaan Aslam</h1>
                <h1>Id#1</h1>
              </div>
            </tr>
            <tr className="flex flex-col">
              <h1>Email</h1>
              <h1>Contact No</h1>
            </tr>
            <tr>
              <h1>Dartappi</h1>
            </tr>
            <tr>
              bin
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Students
