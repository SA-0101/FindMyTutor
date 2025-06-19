import {Users,Trash2} from "lucide-react"
import { useEffect,useState } from "react"

function Students() {

    const BASE_URL= "http://localhost:8000/tutor"

    const [studentsdata,setStudentsdata]=useState([])
    const token = localStorage.getItem('token')
    console.log(studentsdata)

      {/* Getting Students */}
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
    
                  setStudentsdata(responsedata.students);  // Store the fetched data in state
    
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

      {/* Delete API Call */}

      const deleteStudent = async (studentId) => {
  try {
    const response = await fetch(`${BASE_URL}/deleteStudent/${studentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("Student deleted successfully");
      getStudents(); // Re-fetch the student list after deletion
    } else {
      alert(responseData.message);
    }
  } catch (error) {
    console.error("Delete error:", error);
  }
};



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

                      <div className="flex flex-col items-center">
                        <h1 className='font-bold'>Total Students</h1>
                        <h1>{studentsdata.length}</h1>
                      </div>
                    
                  </div>
                  
                    <Users className="w-10 h-10 text-white bg-blue-400 px-2 py-1 rounded-lg" />

      </div>

      {/* Third Section means table */}

        <div className="py-3">
  <table className="w-full border-collapse rounded-lg border border-gray-300 shadow-sm">
    <thead className="bg-blue-200 text-left">
      <tr className="grid grid-cols-[2fr_2fr_2fr_auto] gap-4 px-5 py-3 font-semibold text-gray-700">
        <th>STUDENT</th>
        <th>CONTACT INFO</th>
        <th>ADDRESS</th>
        <th>ACTIONS</th>
      </tr>
    </thead>

    <tbody>
      {studentsdata.length === 0 ? (
        <tr>
          <td colSpan="4" className="text-center py-4">
            No Students Found
          </td>
        </tr>
      ) : (
        studentsdata.map((student, index) => (
          <tr
            key={index}
            className="grid grid-cols-[2fr_2fr_2fr_auto] gap-4 items-center px-5 py-4 border-t border-gray-200"
          >
            {/* STUDENT INFO */}
            <td className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={student.img}
                alt="student"
              />
              <div>
                <h1 className="font-semibold">{student.studentName}</h1>
                <h1 className="text-sm text-gray-500">ID#{index + 1}</h1>
              </div>
            </td>

            {/* CONTACT INFO */}
            <td className="flex flex-col">
              <span>{student.email}</span>
              <span>{student.contact}</span>
            </td>

            {/* ADDRESS */}
            <td>{student.address ? student.address : "N/A"}</td>

            {/* DELETE ACTION */}
            <td className="flex justify-end">
              <Trash2
                size={24}
                className="text-red-500 cursor-pointer hover:scale-110 transition"
                onClick={()=>{deleteStudent(student._id)}}
              />
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Students
