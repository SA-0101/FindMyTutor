import { useState } from "react"


function AdminSetting() {

      const BASE_URL="http://localhost:8000/tutor"
      const token=localStorage.getItem('token')

          const previmg=localStorage.getItem('adminImg')
          const prevname=localStorage.getItem('adminName')
          const prevemail=localStorage.getItem('adminEmail')
          const prevaddress=localStorage.getItem('adminAddress')
          const prevcontact=localStorage.getItem('adminContact')

      const [img,setImg]=useState(null)
      const [name,setName]=useState(prevname || "")
      const [email,setEmail]=useState(prevemail || "")
      const [contact,setContact]=useState(prevcontact || "")
      const [address,setAddress]=useState(prevaddress || "")
      const [password,setPassword]=useState("")
      const [newpassword,setnewPassword]=useState("")


const handleSubmit = async (e) => {
    e.preventDefault();

      const formData = new FormData();

            formData.append("img", img);
            formData.append("adminName", name);
            formData.append("email", email);
            formData.append("contact", contact);
            formData.append("address", address);
            formData.append("currPassword", password);
            formData.append("newPassword", newpassword);

            try {
      const response = await fetch(`${BASE_URL}/updateAdminProfile`, {
        method: "PUT",
        headers: {
          
    Authorization: `Bearer ${token}`,
      },
        body: formData,
      });

      const data = await response.json();
      
      if(response.ok){
        alert("Profile Updated successfully")
        console.log(data);
      }
      else{
        alert(data.error)
      }
     
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <div className='w-full flex justify-center py-10'>
            <div className='w-[600px] flex flex-col px-5 py-5 gap-3 items-center rounded-lg border border-gray-300 shadow-sm'>
              <h1 className='text-xl font-bold'>Update Profile</h1>
              <form onSubmit={handleSubmit} action="" className='w-full flex flex-col justify-center items-center gap-4'>
                    <img className='w-28 h-28 rounded-[100%] bg-green-100 border-4 border-blue-500' src={img ? URL.createObjectURL(img) : previmg} alt="Profile" />
                <div className='w-full flex flex-col gap-4'>
                    <input type="file" onChange={(e) => setImg(e.target.files[0])} />
                    <input value={name} autoComplete="on" className='w-full px-2 py-1 outline-0 border border-[#A5A5A5] rounded-sm' type="" placeholder='Admin Name' onChange={(e)=>{setName(e.target.value)}}/>
                    <input value={email} autoComplete="on" className='w-full px-2 py-1 outline-0 border border-[#A5A5A5] rounded-sm' type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input value={contact} autoComplete="on" className='w-full px-2 py-1 outline-0 border border-[#A5A5A5] rounded-sm' type="number" placeholder='Contact' onChange={(e)=>{setContact(e.target.value)}}/>
                    <input value={address} autoComplete="on" className='w-full px-2 py-1 outline-0 border border-[#A5A5A5] rounded-sm' type="text" placeholder='Address' onChange={(e)=>{setAddress(e.target.value)}}/>

                </div>

                <div className='w-full flex flex-col gap-1'>
                  
                  <input autoComplete="on" className='w-full px-2 py-1 outline-0 border border-[#A5A5A5] rounded-sm' type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                  <input autoComplete="on" className='w-full px-2 py-1 outline-0 border border-[#A5A5A5] rounded-sm' type="password" placeholder='New Password' onChange={(e)=>{setnewPassword(e.target.value)}}/>

                </div>

                <button className='w-full bg-blue-500 text-white font-semibold rounded-sm px-2 py-1 '>Submit Information</button>
              </form>
            </div>
    </div>
  )
}

export default AdminSetting
