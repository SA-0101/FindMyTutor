import { useEffect,useState } from "react"

function StudentNotifications() {

  // const receiverId=localStorage.getItem("studentId")
  // const receiverType=localStorage.getItem("type")
  const token=localStorage.getItem('token')

  const [notifications,setNotifications]=useState([])
  console.log(notifications)

  const BASE_URL="http://localhost:8000/tutor"
   
  {/*Save Teacher API call */}
      const getNotifications=async ()=> {
     
        const receiverId=localStorage.getItem("studentId")
         const receiverType=localStorage.getItem("type")
          try {
            const response = await fetch(`${BASE_URL}/getNotifications/${receiverId}/${receiverType}`,{
              method:"GET",
              headers:{
                'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
              }

            });
            
            const responsedata = await response.json();
      
            if (response.ok) {

              alert("Notifications Fetched")
              setNotifications(responsedata.notifications);  // Store the fetched data in state
              console.log(responsedata)
            }
            else{
                alert(responsedata.message)
            }

          } catch (error) {
            console.error('Error:', error);
          }
        
      }

        useEffect(()=>{
          getNotifications();
    },[])

  return (
    <div>
            
    </div>
  )
}

export default StudentNotifications
