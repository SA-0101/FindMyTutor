import { NavLink, useLocation } from 'react-router-dom';

function VisitTeacherProfile() {

        const location = useLocation();
        const { teacher } = location.state || {}; // fallback in case it's undefined
        console.log(teacher)

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
                <h1>Rating star</h1>
            </div>

          </div>
          {/* 2nd Div */}
          <div className="w-full flex rounded-xl gap-16 px-5 py-8 border border-gray-300 shadow-sm">
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Rate this teacher</h1>
              <h1>Stars</h1>
              <h1 className="text-green-500">Thank you for rating this teacher!</h1>
              <form className="w-full flex gap-2" action="">
                <input className="w-full px-2 py-1 outline-0 border border-black rounded-lg" type="text" name="" id="" placeholder="Enter Your Feedback"/>
                <button className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-1">Send</button>
              </form>
            </div>
            <div></div>
        </div>

        <div className='w-full flex justify-center items-center'>
              <NavLink to="/Student">
                  <button className='cursor-pointer font-bold text-blue-500'>Go Back</button>
              </NavLink>
        </div>
        
    </div>
  )
}

export default VisitTeacherProfile
