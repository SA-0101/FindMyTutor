import { MdNotificationsNone } from "react-icons/md";

function Students() {
  return (
    <div className='w-full flex flex-col gap-8 bg-blue-100 h-lvh'>
            
          <div className='w-full flex flex-col rounded-lg py-3 gap-2 border border-gray-300 shadow-sm'>
                <div className="w-full flex justify-between items-center px-5">
                  <div className='flex items-center gap-2'>
                    <MdNotificationsNone size={50} color="black" className="bg-blue-500 rounded-lg" />
                      <div>
                        <h1 className='text-2xl font-bold'>Notifications</h1>
                        <h1>Manage your notifications and stay connected</h1>
                      </div>
                    
                  </div>
                  
                    <button className="bg-green-500 px-3 h-8 rounded-lg text-white">Refresh</button>
                  
                </div>
                <div className="w-full px-5 py-2">
                    <input className="w-full outline-0 border border-black px-2 py-2 rounded-lg" type="text" name="" id="" placeholder='Search student by name...'/>
                </div>
          </div>


      <div className="w-full flex justify-between items-center px-5 rounded-lg py-3 gap-2 border border-gray-300 shadow-sm">
                  <div className='flex flex-col items-center gap-2'>

                      <div>
                        <h1 className='font-bold'>Total Students</h1>
                        <h1>Student Array Length</h1>
                      </div>
                    
                  </div>
                  
                    <MdNotificationsNone size={45} color="black" className="bg-blue-300 rounded-lg" />

      </div>

      {/* Third Section means table */}

        <table className="w-full px-5">
          <th className="flex justify-between px-5">
            <tr>STUDENT</tr>
            <tr>CONTACT INFO</tr>
            <tr>ADDRESS</tr>
            <tr>ACTIONS</tr>
          </th>
          <tbody className="w-full flex justify-between">
            <tr className="flex items-center gap-3 py-2 px-5">
              <img src="" alt="img" />
              <div className="flex flex-col">
                <h1>Shaan Aslam</h1>
                <h1>Id#1</h1>
              </div>
            </tr>
            <tr className="flex flex-col">
              <h1>Email</h1>
              <h1>Contact No</h1>
            </tr>
            <tr>
              <h1>Dartappi</h1>
            </tr>
            <tr>
              bin
            </tr>
          </tbody>

        </table>

    </div>
  )
}

export default Students
