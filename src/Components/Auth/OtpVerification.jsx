import {useNavigate,NavLink } from 'react-router-dom'
import { useState } from 'react';
import { GraduationCap,Mail,KeyRound,BookOpen,Users,Shield,} from "lucide-react";

function OtpVerification() {
  
     const BASE_URL="http://localhost:8000/tutor"

     const navigate=useNavigate()
     const email = localStorage.getItem("userEmail");
    
    const [studentbg,setStudentbg]=useState('bg-blue-100')
    const [teacherbg,setTeacherbg]=useState("white")
    const [adminbg,setAdminbg]=useState("white")

    const [otp,setOtp]=useState("")

    const [studentapi,setStudentapi]=useState(true)
    const [tutorapi,setTeacherapi]=useState(false)
    const [adminapi,setAdminapi]=useState(false)

    const otpData={

      otp:otp,

    }

    const ForgetPassdata={
      email:email,
    }

     const OtpVer =async ()=> {


    if (studentapi === true) {

      try {
        const response = await fetch(`${BASE_URL}/studentOtpVerificaion`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(otpData)
        });

        const data = await response.json();
        console.log(otp)
        if (response.ok) {
          alert('Valid OTP');
          localStorage.setItem("userotp", otp);
          navigate("/Resetpass")

        } else {
          alert(data.message || 'Something went wrong during registration.');
        }

      } catch (error) {

        alert('Registration failed: ' + error.message);
      }

    }

    else if(tutorapi===true) {

      try {
        const response = await fetch(`${BASE_URL}/teacherOtpVerification`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(otpData)
        });

        const data = await response.json();
        
        if (response.ok) {
          alert('Valid OTP');
          localStorage.setItem("userotp", otp);
          navigate("/Resetpass")
        } else {
          alert(data.message || 'Something went wrong during registration.');
        }

      } catch (error) {

        alert('Registration failed: ' + error.message);
      }

    }
    else{

      try {
        const response = await fetch(`${BASE_URL}/adminOtpVerification`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(otpData)
        });

        const data = await response.json();
        
        if (response.ok) {
          alert('Valid OTP');
         localStorage.setItem("userotp", otp);
          navigate("/Resetpass")
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
    OtpVer();
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
          // localStorage.getItem('user',JSON.stringify(data))
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



    return (
        <div className='flex flex-col justify-between gap-4 py-5 items-center overflow-y-hidden  max-w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>

            <div className='flex flex-col items-center gap-2'>
              <div className='flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-12 h-12 md:w-16 md:h-16'>
                  <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              
              <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>FindMyTutor</h1>
              <h1>Verify your identity</h1>
            </div>

            <div className='flex flex-col w-[33%] h-auto justify-between rounded-lg px-6 py-3 bg-white items-center shadow-lg shadow-gray-200'>
              <div className='flex justify-center items-center w-10 h-10 rounded-[100%] bg-green-200'>
                    <KeyRound className="w-6 h-6 text-green-600" />
              </div>
              <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-xl md:text-2xl font-bold py-1 md:py-3'>Verify OTP</h1>
                  <h1 className='text-sm text-center'>Enter the 6-digit code sent to your email</h1>
              </div>
              
              <div className='w-full flex flex-col gap-2 py-3'>
                <h1 className='flex flex-col font-semibold'>Account type:</h1>
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
                    <KeyRound className="h-5 w-5 text-gray-400" />
                    <input type="number" placeholder=' Enter 6 digit OTP' className='w-full outline-0 px-8 py-1 md:py-3' onChange={(e)=>{setOtp(Number(e.target.value))}}/>
              </div>

                <button type='submit' className='bg-green-500 w-full py-1 md:py-3 text-white font-semibold rounded-lg cursor-pointer hover:scale-[102%] hover:bg-green-600'>Verify Code</button>
              </form>
             
             <div className='flex py-2 flex-col md:flex-row md:justify-center md:items-center'>
                    <label htmlFor="">Didn't receive the code?</label>
                   <button className='py-1 text-green-500 font-semibold cursor-pointer' onClick={()=>{Forgetpassword()}}>Resend OTP</button>
              </div>

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

export default OtpVerification
