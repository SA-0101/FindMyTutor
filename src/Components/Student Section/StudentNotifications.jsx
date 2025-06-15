import { useEffect,useState } from "react"

function StudentNotifications() {

  const receiverId=localStorage.getItem("studentId")
  const receiverType=localStorage.getItem("type")
   
  {/*Save Teacher API call */}
      const getNotifications=async ({receiverId,receiverType})=> {
     
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

              setTeachersdata(responsedata);  // Store the fetched data in state

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
