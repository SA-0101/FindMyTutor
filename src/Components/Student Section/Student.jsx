import { MdForwardToInbox } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Shaanimg from '../../assets/Shaan.jfif'
import { NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// import Notfound from '../Not Found/Notfound';

function Student() {
  
  const img =localStorage.getItem('studentimg')
  console.log(img)
  const navigate=useNavigate();

  return (
        <div className='w-full bg-[#FAFAFA] flex flex-col'>

        <div className="flex justify-between px-[70px] bg-[#1E90FF] py-[10px]">
        <div>
          <h1 className="text-[25px] text-white font-semibold">logo</h1>
        </div>

        <div className="flex items-center space-x-6">
          <div className="bg-white p-1 rounded-full">
            <MdForwardToInbox className="text-2xl text-[#1E90FF] " />
          </div>
          <div className="bg-white p-1 rounded-full">
            <IoIosNotificationsOutline className="text-2xl text-[#1E90FF] " />
          </div>
          <div className="bg-white p-1 rounded-full">
            <IoSettingsOutline className="text-2xl text-[#1E90FF] " />
          </div>
        </div>
      </div>
            <div className='bg-[#FAFAFA]  px-10 py-10 flex gap-8'>

                <div className='bg-[#ffffff] shadow-[0px_4px_20px_#2626261F] rounded-[10px] w-[20%] h-[600px] flex flex-col justify-evenly items-center sticky top-4'>
                   <div className="flex flex-col items-center gap-2">
                         <img src={img} alt="Profile Pic" className='rounded-[50%] w-[120px] h-[120px]' />
                        <h1 className="text-2xl font-semibold text-green-500">Student</h1>
                   </div>
                   
                    <nav className='flex w-full px-8 flex-col gap-2'>

                    <NavLink
        to="."
        end
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >   
      <div className="flex gap-3 w-full items-start">
          <h1>📚</h1>
          <h1>Category</h1>
      </div>
      </NavLink>

      <NavLink
        to="NearbyTeachers"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        <div className="flex gap-3 w-full items-start">
          <h1>📍</h1>
          <h1>Nearby Teachers</h1>
      </div>
      </NavLink>

      <NavLink
        to="SavedTeachers"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        <div className="flex gap-3 w-full items-start">
          <h1>⭐</h1>
          <h1>Saved Teachers</h1>
      </div>
      </NavLink>

        <NavLink
        to="Messages"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        <div className="flex gap-3 w-full items-start">
          <h1>💬</h1>
          <h1>Messages</h1>
      </div>
      </NavLink>

      <NavLink
        to="Notifications"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
         <div className="flex gap-3 w-full items-start">
          <h1>🔔</h1>
          <h1>Notifications</h1>
      </div>
      </NavLink>

        <NavLink
        to="Settings"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
         <div className="flex gap-3 w-full items-start">
          <h1>⚙️</h1>
          <h1>Settings</h1>
      </div>
      </NavLink>

      
        <div className="flex px-4 py-2 text-red-600 font-bold cursor-pointer gap-3 w-full items-start">
          <RiLogoutBoxRLine  size={20} />
          <button className="cursor-pointer" onClick={()=>{localStorage.removeItem('data');navigate("/")}}>Logout</button>
      </div>
              </nav>

                </div>

                <div className='bg-[#FAFAFA] w-[80%]'>
                    <Outlet/>
                </div>


            </div>

        </div>

  )
}

export default Student
