

function VisitTeacherProfile() {
  return (
    <div className="flex flex-col gap-6 py-10">
          <div className="bg-green-100 flex rounded-xl gap-16 px-5 py-8">
          
          <div className="w-full flex gap-1">

            <div className="w-full flex justify-center bg-green-100">
              <img className="w-36 h-36 border-4 border-blue-500 rounded-[100%] bg-yellow-100" src="" alt="" />
            </div>
            <div className="bg-fuchsia-100 w-full flex flex-col gap-4">
                <h1 className="text-3xl text-blue-500 font-bold">Shaan Aslam</h1>
                <h1>Qualified & Experianced Tutor</h1>
                <div className="flex flex-col">
                  <h1>Qualification</h1>
                  <h1 className="font-semibold">BSCS</h1>
                </div>
                <div>
                  <h1>Experiance</h1>
                  <h1 className="font-semibold">2 Years</h1>
                </div>
                <div>
                  <h1>Subject Expertise</h1>
                  <h1 className="font-semibold">CS</h1>
                </div>
                <div>
                  <h1>Email</h1>
                  <h1 className="font-semibold">shaan@gmail</h1>
                </div>
            </div>

            </div>
            <div className="w-full flex flex-col justify-center gap-5">
                  <div>
                  <h1>Contact</h1>
                  <h1 className="font-semibold">2 Years</h1>
                </div>
                <div>
                  <h1>Address</h1>
                  <h1 className="font-semibold">CS</h1>
                </div>
                <hr />
                <h1>Rating star</h1>
            </div>

          </div>
          {/* 2nd Div */}
          <div className="bg-blue-100 w-full flex rounded-xl gap-16 px-5 py-8">
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Rate this teacher</h1>
              <h1>Stars</h1>
              <h1 className="text-green-300">Thank you for rating this teacher!</h1>
              <form className="w-full flex gap-2" action="">
                <input className="w-full px-2 py-1 outline-0 border border-black rounded-lg" type="text" name="" id="" placeholder="Enter Your Feedback"/>
                <button className="bg-blue-600 rounded-lg px-4 py-1">Send</button>
              </form>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default VisitTeacherProfile
