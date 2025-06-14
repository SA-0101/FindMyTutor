import { MdForwardToInbox } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Shaanimg from '../../assets/Shaan.jfif'
import { NavLink, Outlet } from 'react-router-dom'
// import Notfound from '../Not Found/Notfound';

function Student() {
  

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

                <div className='bg-[#ffffff] shadow-[0px_4px_20px_#2626261F] rounded-[10px] w-[20%] h-[600px] flex flex-col justify-evenly items-center'>
                    <img src={Shaanimg} alt="Profile Pic" className='rounded-[50%] w-[120px] h-[120px]' />
                   
                    <nav className='flex flex-col gap-2'>

                    <NavLink
        to="."
        end
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        Category
      </NavLink>

      <NavLink
        to="SearchTeachers"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        Search Teacher
      </NavLink>

      <NavLink
        to="NearbyTeachers"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        Nearby Teacher
      </NavLink>

      <NavLink
        to="SavedTeachers"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        Saved Teachers
      </NavLink>

        <NavLink
        to="Messages"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        Messages
      </NavLink>

      <NavLink
        to="Notifications"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        Notifications
      </NavLink>

        <NavLink
        to="Setting"
        className={({ isActive }) =>
          `flex text-[#A5A5A5] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        Settings
      </NavLink>

      <NavLink
        to="Logout"
        className={({ isActive }) =>
          `flex text-[#FF6824] items-center w-full py-2 px-4 rounded-full ${
            isActive ? "text-[#ffffff] bg-[#1E90FF]" : "hover:bg-gray-100"
          }`
        }
      >
        Logout
      </NavLink>

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
