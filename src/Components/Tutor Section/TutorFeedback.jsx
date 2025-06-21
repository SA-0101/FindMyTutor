import { useEffect,useState } from "react"

function TutorFeedback() {

  const BASE_URL="http://localhost:8000/tutor"
  const teacherId=localStorage.getItem("teacherId")
  console.log(teacherId)
  const token=localStorage.getItem('token')

  const [feedbacks,setFeedbacks]=useState([])
  console.log(feedbacks)
   
  {/*Feedback API call */}
      const getNotifications=async ()=> {
     
          try {
            const response = await fetch(`${BASE_URL}/getFeedback/${teacherId}`,{
              method:"GET",
              headers:{
                'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
              }

            });
            
            const responsedata = await response.json();
      
            if (response.ok) {

              setFeedbacks(responsedata.feedbacks);  // Store the fetched data in state
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

            <div className="text-2xl font-bold">Student Feedbacks ({feedbacks.length})</div>
              <hr />

            {
              feedbacks.length===0 ? <div>No Feedbacks</div> :
             feedbacks.map((feedback,index)=>{

              return <div key={index} className="w-full flex flex-col items-start rounded-lg gap-2 px-3 py-2 border border-black">

              <div className="w-full flex justify-between bg-[#FAFAFA]">
                <div className="flex items-center gap-3 font-semibold">
                  <img className="w-12 h-12 rounded-[100%]" src={feedback.studentImg} alt="img" />
                  <h1>{feedback.studentName}</h1>
                </div>
                <h1>{splitDateTime(feedback.createdAt).dateOnly} at {splitDateTime(feedback.createdAt).timeOnly}</h1>
              </div>

                      <h1>{feedback.feedback}</h1>

            </div>

             })  

            }
           

          </div>


    </div>
  )
}

export default TutorFeedback
