import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import StarRating from './StarRating';

function VisitTeacherProfile() {

      const BASE_URL="http://localhost:8000/tutor"

       const location = useLocation();
       const { teacher } = location.state || {}; // fallback in case it's undefined
       const token=localStorage.getItem('token')
       const studentId =localStorage.getItem('studentId')
       const [feedback,setFeedback]=useState("")
       console.log(feedback)
       const teacherId=teacher._id
       const [rating, setRating] = useState(0);
       console.log(teacherId)
      
    

  const ratingAPI=async ()=>{

       const ratingData={

       studentId:studentId,
       teacherId:teacherId,
       rating:rating,

    }

    try {
    const response = await fetch(`${BASE_URL}/rateToRecommend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(ratingData)
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("Rating submitted")
      console.log("Rating submitted successfully:", responseData);

    } else {
      console.error("Failed to submit rating:", responseData.message);
    }
  } catch (error) {
    console.error("Error submitting rating:", error);
  }
};

const feedbackAPI=async ()=>{

  const feedbackData={
        studentId:studentId,
        teacherId:teacherId,
        feedback:feedback,
      }

    try {
    const response = await fetch(`${BASE_URL}/sendFeedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(feedbackData)
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("feedback posted")
      console.log("Feedback send successfully:", responseData);

    } else {
      console.error("Failed to send feedback:", responseData.message);
    }
  } catch (error) {
    console.error("Error sending feedback:", error);
  }
};



  return (
    <div className="flex flex-col gap-6 py-10">
          <div className="flex rounded-xl gap-16 px-5 py-8 border border-gray-300 shadow-sm">
          
          <div className="w-full flex gap-1">

            <div className="w-full flex justify-center">
              <img className="w-36 h-36 border-4 border-blue-500 rounded-[100%] bg-yellow-100" src={teacher.img} alt="" />
            </div>
            <div className="w-full flex flex-col gap-4">
                <h1 className="text-3xl text-blue-500 font-bold">{teacher.teacherName}</h1>
                <h1>Qualified & Experianced Tutor</h1>
                <div className="flex flex-col">
                  <h1>Qualification</h1>
                  <h1 className="font-semibold">{teacher.degree}</h1>
                </div>
                <div>
                  <h1>Experiance</h1>
                  <h1 className="font-semibold">{teacher.experience} Years</h1>
                </div>
                <div>
                  <h1>Subject Expertise</h1>
                  <h1 className="font-semibold">{teacher.subject}</h1>
                </div>
                <div>
                  <h1>Email</h1>
                  <h1 className="font-semibold">{teacher.email}</h1>
                </div>
            </div>

            </div>
            <div className="w-full flex flex-col justify-center gap-5">
                  <div>
                  <h1>Contact</h1>
                  <h1 className="font-semibold">{teacher.contact}</h1>
                </div>
                <div>
                  <h1>Address</h1>
                  <h1 className="font-semibold">{teacher.location}</h1>
                </div>
                <hr />
              <div className="flex items-center gap-3">
                <StarRating rating={teacher.rating} />
                <p className="text-sm text-gray-500">{teacher.rating}/5 Stars</p>
              </div>
            </div>

          </div>
          {/* 2nd Div */}
          <div className="w-full flex rounded-xl gap-16 px-5 py-8 border border-gray-300 shadow-sm">
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Rate this teacher</h1>
              {/* Div for rating through Stars */}

              <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => {setRating(star),ratingAPI()}}
          style={{
            fontSize: "24px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray"
          }}
        >
          ★
        </span>
      ))}
      <p className="ml-2">Selected Rating: {rating}</p>
    </div>

              <h1 className="text-green-500">Thank you for rating this teacher!</h1>
              <div className="w-full flex gap-2" action="">
                <input className="w-full px-2 py-1 outline-0 border border-black rounded-lg" type="text" name="" id="" placeholder="Enter Your Feedback" onChange={(e)=>setFeedback(e.target.value)}/>
                <button className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-1" onClick={()=>{feedbackAPI()}}>Send</button>
              </div>
            </div>
            <div></div>
        </div>
        
    </div>
  )
}

export default VisitTeacherProfile
