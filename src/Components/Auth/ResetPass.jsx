import { useNavigate,NavLink } from 'react-router-dom'
import { useState } from 'react';
import { GraduationCap,Mail,Lock,BookOpen,Users,Shield,} from "lucide-react";

function ResetPass() {
  
     const BASE_URL="http://localhost:8000/tutor"
    
     const navigate=useNavigate()

    const [studentbg,setStudentbg]=useState('bg-blue-100')
    const [teacherbg,setTeacherbg]=useState("white")
    const [adminbg,setAdminbg]=useState("white")

    const [newpass,setNewpass]=useState("")
    const [confirmpass,setConfirmpass]=useState("")

    const [studentapi,setStudentapi]=useState(true)
    const [tutorapi,setTeacherapi]=useState(false)
    const [adminapi,setAdminapi]=useState(false)

    const otp=localStorage.getItem('userotp')
    const email = localStorage.getItem("userEmail");
    console.log(otp)
    console.log(email)
    
    const passresetData={

      password:newpass,
      otp:otp,

    }

     const loginUser =async ()=> {


    if (studentapi === true) {

      try {
        const response = await fetch(`${BASE_URL}/studentResetPass`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(passresetData)
        });

        const data = await response.json();

        if (response.ok) {
          alert('Student password reset Successfully!');
          navigate("/")

        } else {
          alert(data.message || 'Something went wrong during registration.');
        }

      } catch (error) {

        alert('Registration failed: ' + error.message);
      }

    }

    else if(tutorapi===true) {

      try {
        const response = await fetch(`${BASE_URL}/teacherResetPass`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(passresetData)
        });

        const data = await response.json();
        
        if (response.ok) {
          alert('Tutor password reset Successfully!');
          localStorage.getItem('user',data)
          navigate("/")
        } else {
          alert(data.message || 'Something went wrong during registration.');
        }

      } catch (error) {

        alert('Registration failed: ' + error.message);
      }

    }
    else{

      try {
        const response = await fetch(`${BASE_URL}/adminResetPass`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(passresetData)
        });

        const data = await response.json();

        if (response.ok) {
          alert('Admin password reset Successfully!');
          localStorage.getItem('user',data)
          navigate("/")
        } else {
          alert(data.message || 'Something went wrong during registration.');
        }

      } catch (error) {

        alert('Registration failed: ' + error.message);
      }

    }

  }

  function handleSubmit(e) {
    e.preventDefault();
    loginUser();
  }

    return (
        <div className='flex flex-col justify-between gap-4 py-5 items-center overflow-y-hidden  max-w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>

            <div className='flex flex-col items-center gap-2'>
              <div className='flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-12 h-12 md:w-16 md:h-16'>
                  <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              
              <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>FindMyTutor</h1>
              <h1>Create a new secure password for your account</h1>
            </div>

            <div className='flex flex-col w-[33%] h-auto justify-between rounded-lg px-6 py-3 bg-white items-center shadow-lg shadow-gray-200'>
             <div className='flex justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-[100%] bg-purple-300'><Lock className="w-7 h-7" /></div>
              <h1 className='text-xl md:text-2xl font-bold py-1 md:py-2'>Reset Password</h1>
              <div className='w-full flex flex-col gap-2 py-3'>
                <h1 className='flex flex-col font-semibold'>Sign in as:</h1>
                  <div className='w-full flex flex-col md:flex md:flex-row basis-1 gap-4 md:flex-wrap md:justify-center md:items-center'>
                    <div className={`flex flex-col items-center cursor-pointer hover:scale-[103%] rounded-lg ${studentbg} px-3 md:px-8 py-1 md:py-2 border-2 border-gray-200`} onClick={() => {setStudentbg('bg-blue-100');setTeacherbg('bg-white');setAdminbg('bg-white');setTeacherapi(false);setStudentapi(true);setAdminapi(false)}}>
                      <BookOpen className="w-5 h-5" />
                      <h1>Student</h1>
                    </div>
                   <div className={`flex flex-col items-center cursor-pointer hover:scale-[103%] rounded-lg ${teacherbg} px-3 md:px-8 py-1 md:py-2 border-2 border-gray-200`} onClick={() => {setTeacherbg('bg-blue-100');setAdminbg('bg-white');setStudentbg('bg-white');setTeacherapi(true);setStudentapi(false);setAdminapi(false)}}>
                      <Users className="w-5 h-5" />
                      <h1>Teacher</h1>
                    </div>
                    <div className={`flex flex-col items-center cursor-pointer hover:scale-[103%] rounded-lg ${adminbg} px-3 md:px-8 py-1 md:py-2 border-2 border-gray-200`} onClick={() => {setAdminbg('bg-blue-100');setTeacherbg('bg-white');setStudentbg('bg-white');setTeacherapi(false);setStudentapi(false);setAdminapi(true)}}>
                      <Shield className="w-5 h-5" />
                      <h1>Admin</h1>
                    </div>
                  </div>
              </div>

              <form action="" onSubmit={handleSubmit} className='flex flex-col w-full py-0 md:py-3 gap-2 md:gap-3 lg:gap-5 items-center'>
             
              <div className='w-full flex justify-between items-center px-2 rounded-lg border border-gray-300 bg-gray-100'>
                    <Lock className="h-5 w-5 text-gray-400" />
                    <input autoComplete='on' type="password" placeholder='Enter your new password' className='w-full outline-0 px-8 py-1 md:py-3' onChange={(e)=>{setNewpass(e.target.value)}}/>
              </div>
                
               <div className='w-full flex justify-between items-center px-2 rounded-lg border border-gray-300 bg-gray-100'>
                     <Lock className="h-5 w-5 text-gray-400" />
                    <input autoComplete='on' type="text" placeholder='Confirm your new password' className='w-full outline-0 px-8 py-1 md:py-3' onChange={(e)=>{setConfirmpass(e.target.value)}}/>
              </div>

                <button type='submit' className='bg-purple-500 w-full px-8 py-1 md:py-3 text-white font-semibold rounded-lg cursor-pointer hover:scale-[102%] hover:bg-blue-700'>Reset Password</button>
              </form>
             

                <hr className='border-s border-gray-300 w-full'/>
                <div className='flex flex-col justify-center items-center py-3'>
                  <label htmlFor="" className='text-gray-600'>Remember your password? </label>
                
                 <NavLink to="/Login">
                      <button className='text-blue-600 font-semibold cursor-pointer'>Back to login</button>
                 </NavLink>

                </div>
            </div>

      
    </div>
      )
}

export default ResetPass
