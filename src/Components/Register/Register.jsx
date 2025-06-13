import { useNavigate,NavLink } from 'react-router-dom'
import { useState } from 'react';
import { GraduationCap,Mail,Lock,BookOpen,Users,Shield,} from "lucide-react";

function Register() {
  
    const [studentbg,setStudentbg]=useState('bg-blue-100')
    const [teacherbg,setTeacherbg]=useState("white")
    const [adminbg,setAdminbg]=useState("white")

    const [studentapi,setStudentapi]=useState(true)
    const [teacherapi,setTeacherapi]=useState(false)
    const [adminapi,setAdminapi]=useState(false)

    return (
        <div className='flex flex-col justify-between gap-4 py-5 items-center overflow-y-hidden  max-w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>

            <div className='flex flex-col items-center gap-2'>
              <div className='flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16'>
                  <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>FindMyTutor</h1>
              <h1>Join our learning community</h1>
            </div>

            <div className='flex flex-col w-[33%] h-auto justify-between rounded-lg px-6 py-3 bg-white items-center shadow-lg shadow-gray-200'>
              <h1 className='text-2xl font-bold py-3'>Create Account</h1>
              <div className='w-full flex flex-col gap-2 py-3'>
                <h1 className='flex flex-col font-semibold'>I am a:</h1>
                  <div className='w-full flex basis-1 gap-4 flex-wrap justify-center  items-center'>
                    <div className={`flex flex-col items-center rounded-lg ${studentbg} px-8 py-2 border-2 border-gray-200`} onClick={() => {setStudentbg('bg-blue-100');setTeacherbg('bg-white');setAdminbg('bg-white');setTeacherapi(false);setStudentapi(true);setAdminapi(false)}}>
                      <BookOpen className="w-5 h-5" />
                      <h1>Student</h1>
                    </div>
                   <div className={`flex flex-col items-center rounded-lg ${teacherbg} px-8 py-2 border-2 border-gray-200`} onClick={() => {setTeacherbg('bg-blue-100');setAdminbg('bg-white');setStudentbg('bg-white');setTeacherapi(true);setStudentapi(false);setAdminapi(false)}}>
                      <Users className="w-5 h-5" />
                      <h1>Teacher</h1>
                    </div>
                  </div>
              </div>

              <form action="" className='flex flex-col w-full py-3 gap-5 items-center'>
             
              <div className='w-full flex justify-between items-center px-2 rounded-lg border border-gray-300 bg-gray-100'>
                    <Users className="h-5 w-5 text-gray-400" />
                    <input type="text" placeholder='Full Name' className='w-full outline-0 px-3 py-3'/>
              </div>

              <div className='w-full flex justify-between items-center px-2 rounded-lg border border-gray-300 bg-gray-100'>
                    <Mail className="h-5 w-5 text-gray-400" />
                    <input type="text" placeholder='Email Address' className='w-full outline-0 px-3 py-3'/>
              </div>
                
               <div className='w-full flex justify-between items-center px-2 rounded-lg border border-gray-300 bg-gray-100'>
                     <Lock className="h-5 w-5 text-gray-400" />
                    <input type="text" placeholder='Password' className='w-full outline-0 px-3 py-3'/>
              </div>

              <div className='w-full flex justify-between items-center px-2 rounded-lg border border-gray-300 bg-gray-100'>
                     <Lock className="h-5 w-5 text-gray-400" />
                    <input type="text" placeholder='Conform Password' className='w-full outline-0 px-3 py-3'/>
              </div>

                <button className='bg-blue-600 w-full py-3 text-white font-semibold rounded-lg cursor-pointer hover:scale-[102%] hover:bg-blue-700'>Create Account</button>
              </form>

              <button className='py-3 text-red-500 font-semibold cursor-pointer'>Forgot your Password?</button>

                <hr className='border-s border-gray-300 w-full'/>
                <div className='py-3'>
                  <label htmlFor="" className='text-gray-600'>Dont have an account? </label>
                
                 <NavLink to="/Register">
                      <button className='text-blue-600 font-semibold cursor-pointer'>Create Account</button>
                 </NavLink>

                </div>
            </div>
            
            <h1 className='text-gray-500'>Secure login to your learning dashboard</h1>

      
    </div>
      )
}

export default Register
