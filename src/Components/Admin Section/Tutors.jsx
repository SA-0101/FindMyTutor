import { FaChalkboardTeacher} from 'react-icons/fa';


function Tutors() {
  return (
    <div className='w-full flex flex-col items-center gap-5 px-5 py-2'>
            <div className='bg-green-200 flex flex-col items-center px-5 py-2'>
                <FaChalkboardTeacher size={30} color='blue'/>
                <h1 className='text-4xl font-bold'>Teacher Management</h1>
                <h1>Manage and Organize your teaching Staff</h1>
            </div>
            <div className='bg-blue-200 flex flex-col items-center px-5 py-2'>
              <h1>All Teachers</h1>
              <h1>6</h1>
            </div>
            <div className='bg-yellow-200 w-[100px] h-20'></div>
            <div className='bg-fuchsia-200 w-full h-36'></div>
    </div>
  )
}

export default Tutors
