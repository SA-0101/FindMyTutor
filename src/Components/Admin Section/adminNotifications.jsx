import {Bell} from 'lucide-react'

function AdminNotifications() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-7 py-5">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
                 <Bell className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold">Send Notification</h1>
              <h1>Communicate with students and teachers instantly</h1>
            </div>
            <div className="w-[500px] flex flex-col">
                <div className="w-full flex rounded-tl-lg rounded-tr-lg px-3 py-3 text-lg text-white font-bold bg-indigo-500">Compose Notification</div>
                <form className="w-full flex flex-col justify-center py-10 px-3 gap-5 border border-gray-300 shadow-sm" action="">

                  <div className="w-full flex flex-col gap-2">
                    <h1>Send To</h1>
                    <div className="flex justify-between">
                      <button className="bg-blue-100 border-2 border-blue-500 px-20 py-2 rounded-lg">Student</button>
                      <button className="border-2 border-black px-20 py-2 rounded-lg">Teacher</button>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h1>Select Recepient</h1>
                    <div className="flex justify-between">
                      <select className="w-full px-2 py-2 outline-0 border border-black rounded-lg">
                        <option value="">Choose a Recepient</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h1>Notification Title</h1>
                    <div className="w-full flex justify-between">
                      <input className="w-full px-2 py-2 outline-0 border border-black rounded-lg" type="text" placeholder="Enter a clearmdescriptive title..."/>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h1>Message Content</h1>
                    <div className="w-full flex justify-between">
                      <textarea className="w-full px-2 py-2 outline-0 border border-black rounded-lg" rows={5} name="" id="" placeholder="Write your detailed message here ..."></textarea>
                    </div>
                  </div>
                  <button className="w-full px-2 py-1 outline-0 rounded-lg bg-indigo-400">Send Notification</button>
                    
                    <hr className="border border-black"/>
                <div className="w-full flex justify-between py-5">
                  <div className="flex flex-col justify-center items-center rounded-lg px-20 py-3 bg-blue-400">
                    <h1>9</h1>
                    <h1>Students</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-lg px-20 py-3 bg-blue-400">
                    <h1>9</h1>
                    <h1>Teachers</h1>
                  </div>
                </div>

                </form>
                
            </div>
            
           
    </div>
  )
}

export default AdminNotifications
