import { useEffect,useState } from "react";
import { MdPerson } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";


function TutorNotifications() {

    const BASE_URL="http://localhost:8000/tutor"
    const [students,setStudents]=useState([])
    const [studentname,setStudentname]=useState("")
    const [title,setTitle]=useState("")
    const [message,setMessage]=useState("")
    const [receiverId,setRecieverid]=useState("")

    const token= localStorage.getItem('token')
    const type= localStorage.getItem('type')
    const teacherId= localStorage.getItem('teacherId')
    const receivertype= localStorage.getItem('receiverType')


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
    
                  setStudents(responsedata.students);  // Store the fetched data in state

                }
                else{
                    alert(responsedata)
                    
                }
    
              } catch (error) {
                console.error('Error:', error);
              }
            
          }
    
            useEffect(()=>{
              getStudents();
        },[])

      const handleSubmit = async (e) => {
    e.preventDefault();

    const notificationData={

          senderId: teacherId,
          senderType: type,
          receiverId: receiverId,
          receiverType: receivertype,
          title: title ,
          message: message,

    }
  

    try {
      const response = await fetch(`${BASE_URL}/sendNotification`, {
        method: "POST",
        headers: {
    Authorization: `Bearer ${token}`,
      },
        body:JSON.stringify(notificationData),
      });

      const data = await response.json();
      
      if(response.ok){
        alert("Profile Updated successfully")
        console.log(data);
      }
      else{
        alert(data.error)
      }
     
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
     <div className='w-full flex flex-col gap-4 py-[20px] justify-center items-center'>
          <div className='w-full flex items-center gap-4 px-5 py-3 h-20 rounded border border-gray-300 p-4 shadow-sm'>
                        <MdNotificationsNone size={50} color="black" className="bg-blue-500 rounded-lg" />
                        <div>
                          <h1 className='text-2xl font-bold'>Notifications</h1>
                          <h1>Manage your notifications and stay connected</h1>
                        </div>
          
                      </div>

            <div className="w-full px-[100px]">
              
                   <div className='w-full bg-green-500 flex items-center gap-4 px-4 py-3 shadow p-4 rounded-t-lg rounded-tl-lg'>
                        <MdNotificationsNone size={50} color="white" className=" rounded-lg" />
                        <div>
                          <h1 className='text-2xl font-bold'>Send Notification</h1>
                          <h1>Notify Your Students</h1>
                        </div>
          
                      </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10 px-4 py-4 rounded-lg border border-gray-300 p-4 shadow-sm" action="">

                    <div className="flex flex-col gap-1">
                      <label className="font-semibold" htmlFor="">Select Student</label>
                      <select className="px-2 py-2 rounded-lg outline-0 border-[1px] border-black" name="" id="" onChange={(e)=>{setStudentname(e.target.value)}}>
                        <label htmlFor="" >Choose Student</label>
                      {
                        students.length===0 ? <label htmlFor="">No student found</label> : 
                        students.map((student,index)=>{
                          return <option key={index} value={student.studentName}>{student.studentName}</option>
                        })
                      }

                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-semibold" htmlFor="">Notification Title</label>
                      <input className="px-2 py-2 rounded-lg outline-0 border-[1px] border-black" type="text" placeholder="Enter Notification title ..." onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-semibold" htmlFor="">Message</label>
                      <textarea className="px-2 py-2 rounded-lg outline-0 border-[1px] border-black" rows="7" name="" id="" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                    </div>
          <button className="bg-green-600 text-white font-semibold px-2 py-2 rounded-lg outline-0">Send Notification</button>
                </form>
            </div>

            

    </div>
  )
}

export default TutorNotifications
