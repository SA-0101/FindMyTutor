import { useState } from 'react';
import { FiCamera } from "react-icons/fi";


function StudentSetting() {

        const BASE_URL="http://localhost:8000/tutor"
       
       const studentNamee =localStorage.getItem('studentname')
       const imgg =localStorage.getItem('studentimg')
       const emaill =localStorage.getItem('email')

      //  const contactt =localStorage.setItem('contact',data.student.contact)
       const addresss =localStorage.getItem('address')
        const token=localStorage.getItem('token')

        const [studentName, setstudentName] = useState(studentNamee || "");
        const [img, setImg] = useState(null);
        const [email, setEmail] = useState(emaill || "");
        const [contact,setContact]=useState("");
        const [address, setAddress] = useState(addresss || "");
        const [currPassword,setcurrPassword]=useState("");
        const [newPassword,setnewPassword]=useState("");

        const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("studentName", studentName);
    formData.append("contact", contact);
    formData.append("img", img);
    formData.append("email", email);
    formData.append("address",address);
    formData.append("currPassword",currPassword);
    formData.append("newPassword",newPassword);

    // console.log("checking img attribute",img)

    try {
      const response = await fetch(`${BASE_URL}/updateStudentProfile`, {
        method: "PUT",
        headers: {
    Authorization: `Bearer ${token}`,
      },
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      
      if(response.ok){
        alert("Profile Updated successfully")
        
      }
      else{
        alert(data.error)
      }
     
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };


  return (
    <div className='min-h-screen flex flex-col gap-6 justify-center items-center py-10 px-4'>
      
      <form onSubmit={handleSubmit} className='w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-8'>
          <div className='flex flex-col items-center gap-5'>

            <h1 className='text-2xl font-extrabold text-gray-900 tracking-wide'>Update Profile</h1>
          
            {/* Display selected image preview OR user image */}
            <div className="relative">
              <img
                src={img ? URL.createObjectURL(img) : imgg}
                alt="Profile"
                className='w-28 h-28 rounded-full object-cover border-4 border-purple-400 shadow-md'
              />
              {/* Camera icon overlay */}
              <label 
                htmlFor="profileImage"
                className='absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full cursor-pointer hover:bg-purple-700 transition'
                title="Change profile picture"
              >
                <FiCamera className='text-white w-5 h-5'/>
              </label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
                className='hidden'
              />
            </div>

          </div>
          
          <div className='space-y-4'>
            <input 
              value={studentNamee} 
              onChange={(e)=>{setstudentName(e.target.value)}} 
              type="text" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='User Name'
              required
            />
            <input 
              value={email} 
              onChange={(e)=>{setEmail(e.target.value)}} 
              type="email" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='Email'
              required
            />
            <input 
              value={contact} 
              onChange={(e)=>{setContact(e.target.value)}} 
              type="number" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='Contact'
            />
            <input 
              value={address} 
              onChange={(e)=>{setAddress(e.target.value)}} 
              type="text" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='Address'
            />
          </div>

          <hr className='border-purple-300' />

          <div className='space-y-4'>
            <h1 className='text-xl font-semibold text-gray-800'>Change Password</h1>
            <input 
              autoComplete='on' 
              value={currPassword} 
              onChange={(e)=>{setcurrPassword(e.target.value)}} 
              type="password" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='Current Password'
            />
            <input 
              autoComplete='on' 
              value={newPassword} 
              onChange={(e)=>{setnewPassword(e.target.value)}} 
              type="password" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='New Password'
            />
            <button 
              className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition'
              type='submit'
            >
              Update Profile
            </button>
          </div>
      </form>
    </div>
  )
}

export default StudentSetting
