import { useNavigate,NavLink } from 'react-router-dom'
import { useState } from 'react';
import { GraduationCap,Mail,Lock,BookOpen,Users,Shield,} from "lucide-react";

function ForgetPass() {
  
     const BASE_URL="http://localhost:8000/tutor"

     const navigate=useNavigate()

    const [studentbg,setStudentbg]=useState('bg-blue-100')
    const [teacherbg,setTeacherbg]=useState("white")
    const [adminbg,setAdminbg]=useState("white")

    const [email,setEmail]=useState("")

    const [studentapi,setStudentapi]=useState(true)
    const [tutorapi,setTeacherapi]=useState(false)
    const [adminapi,setAdminapi]=useState(false)
    console.log(studentapi)

    const ForgetPassdata={

      email:email,

    }

     const Forgetpassword =async ()=> {


    if (studentapi === true) {

      try {
        const response = await fetch(`${BASE_URL}/studentFogotPass`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ForgetPassdata)
        });

        const data = await response.json();

        if (response.ok) {
          alert('code send Successfully!!');
          localStorage.setItem("userEmail", email);
          navigate("/Otpver")

        } else {
          alert(data.message || 'Something went wrong during registration.');
        }

      } catch (error) {

        alert('Registration failed: ' + error.message);
      }

    }

    else if(tutorapi===true) {

      try {
        const response = await fetch(`${BASE_URL}/teacherForgotPass`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ForgetPassdata)
        });

        const data = await response.json();
        
        if (response.ok) {
          alert('code send Successfully!!');
          // localStorage.getItem('user',JSON.stringify(data))
          navigate("/Otpver")
        } else {
          alert(data.message || 'Something went wrong during registration.');
        }

      } catch (error) {

        alert('Registration failed: ' + error.message);
      }

    }
    else{

      try {
        const response = await fetch(`${BASE_URL}/adminForgotPass`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ForgetPassdata)
        });

        const data = await response.json();

        if (response.ok) {
          alert('code send Successfully!');
          // localStorage.getItem('user',JSON.stringify(data))
          navigate("/Otpver")
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
    Forgetpassword();
  }

    return (
        <div className='flex flex-col justify-between gap-4 py-5 items-center overflow-y-hidden  max-w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>

            <div className='flex flex-col items-center gap-2'>
              <div className='flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16'>
                  <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>FindMyTutor</h1>
              <h1>Reset your password</h1>
            </div>

            <div className='flex flex-col w-[33%] h-auto justify-between rounded-lg px-6 py-3 bg-white items-center shadow-lg shadow-gray-200'>
              <div className='flex justify-center items-center w-10 h-10 rounded-[100%] bg-yellow-200'>
                    <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <div className='flex flex-col justify-center items-center py-2'>
                  <h1 className='text-2xl font-bold py-3'>Forgot Password?</h1>
                  <h1 className='text-sm'>No worries! Enter your email and we'll send you a reset code.</h1>
              </div>
              
              <div className='w-full flex flex-col gap-2 py-3'>
                <h1 className='flex flex-col font-semibold'>Account type:</h1>
                  <div className='w-full flex basis-1 gap-4 flex-wrap justify-center  items-center'>
                    <div className={`flex flex-col items-center cursor-pointer hover:scale-[103%] rounded-lg ${studentbg} px-8 py-2 border-2 border-gray-200`} onClick={() => {setStudentbg('bg-blue-100');setTeacherbg('bg-white');setAdminbg('bg-white');setTeacherapi(false);setStudentapi(true);setAdminapi(false)}}>
                      <BookOpen className="w-5 h-5" />
                      <h1>Student</h1>
                    </div>
                   <div className={`flex flex-col items-center cursor-pointer hover:scale-[103%] rounded-lg ${teacherbg} px-8 py-2 border-2 border-gray-200`} onClick={() => {setTeacherbg('bg-blue-100');setAdminbg('bg-white');setStudentbg('bg-white');setTeacherapi(true);setStudentapi(false);setAdminapi(false)}}>
                      <Users className="w-5 h-5" />
                      <h1>Teacher</h1>
                    </div>
                    <div className={`flex flex-col items-center cursor-pointer hover:scale-[103%] rounded-lg ${adminbg} px-8 py-2 border-2 border-gray-200`} onClick={() => {setAdminbg('bg-blue-100');setTeacherbg('bg-white');setStudentbg('bg-white');setTeacherapi(false);setStudentapi(false);setAdminapi(true)}}>
                      <Shield className="w-5 h-5" />
                      <h1>Admin</h1>
                    </div>
                  </div>
              </div>

              <form action="" onSubmit={handleSubmit} className='flex flex-col w-full py-3 gap-5 items-center'>
             
              <div className='w-full flex justify-between items-center px-2 rounded-lg border border-gray-300 bg-gray-100'>
                    <Mail className="h-5 w-5 text-gray-400" />
                    <input type="email" placeholder=' Enter email address' className='w-full outline-0 px-3 py-3' onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>

                <button type='submit' className='bg-orange-500 w-full py-3 text-white font-semibold rounded-lg cursor-pointer hover:scale-[102%] hover:bg-orange-600'>Send Code</button>
              </form>
             

                <hr className='border-s border-gray-300 w-full'/>
                <div className='py-3'>
                
                 <NavLink to="/Login">
                      <button className='text-blue-600 font-semibold cursor-pointer'>Back to Login</button>
                 </NavLink>

                </div>
            </div>
            
            <h1 className='text-gray-500'>Secure password recovery for your account</h1>

      
    </div>
      )
}

export default ForgetPass
