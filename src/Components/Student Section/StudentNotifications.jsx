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

              // alert("Notifications Fetched")
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


    const removeNotification=async (notification)=> {
  
          try {
            const response = await fetch(`${BASE_URL}/removeNotification/${notification._id}`,{
              method:"DELETE",
              headers:{
                'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
              }

            });
            
            const responsedata = await response.json();
      
            if (response.ok) {

              alert("Notification Removed")
              getNotifications();
              console.log(responsedata)
            }
            else{
                alert(responsedata.message)
            }

          } catch (error) {
            console.error('Error:', error);
          }
        
      }


    {/*Function for Separating Date and Time */}
    function splitDateTime(datetimeString) {
       const date = new Date(datetimeString);
        return {
          dateOnly: date.toLocaleDateString(),
          timeOnly: date.toLocaleTimeString(),
        };
    }

  return (
    <div className="w-full">

          <div className="flex flex-col justify-center items-center gap-5">

            <div className="text-2xl font-bold">🔔 Your Notifications</div>
              <hr />

            {
              notifications.length===0 ? <div>No Notifications for You</div> :
             notifications.map((notification,index)=>{

              return <div key={index} className="w-full flex flex-col items-start rounded-lg gap-2 px-3 py-2 border border-black">

              <div className="w-full flex justify-between bg-[#FAFAFA]">
                <h1>From: <span className="font-semibold">{notification.senderType}</span></h1>
                <h1>{splitDateTime(notification.createdAt).dateOnly} at {splitDateTime(notification.createdAt).timeOnly}</h1>
              </div>

              <h1 className="text-lg font-semibold">{notification.title}</h1>
              <h1>{notification.message}</h1>
              <button className="px-4 py-1 rounded-lg text-white font-semibold bg-red-500" onClick={()=>{removeNotification(notification)}}>Delete</button>

            </div>

             })  

            }
           

          </div>


    </div>
  )
}

export default StudentNotifications
