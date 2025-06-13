import './App.css'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import LandingPage from '../src/Components/Landing Page/LandingPage'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import ForgotPass from '../src/Components/Auth/ForgotPass'
import OtpVerification from '../src/Components/Auth/OtpVerification'
import ResetPass from '../src/Components/Auth/ResetPass'

import Student from '../src/Components/Student Section/Student'
import StudentHome from './Components/Student Section/StudentHome'
import StudentCategory from './Components/Student Section/StudentCategory'
import NearbyTeachers from '../src/Components/Student Section/NearbyTeachers'
import SavedTeachers from '../src/Components/Student Section/SavedTeachers'
import StudentMessages from './Components/Student Section/StudentMessages'
import StudentNotifications from './Components/Student Section/StudentNotifications'
import StudentSetting from './Components/Student Section/StudentSetting'

import Tutor from '../src/Components/Tutor Section/Tutor'
import TutorHome from './Components/Tutor Section/TutorHome'
import ProfileOverview from '../src/Components/Tutor Section/ProfileOverview'
import TutorMessages from './Components/Tutor Section/TutorMessages'
import TutorNotifications from './Components/Tutor Section/TutorNotifications'
import TutorFeedback from './Components/Tutor Section/TutorFeedback'
import TutorSetting from './Components/Tutor Section/TutorSetting'

import Admin from '../src/Components/Admin Section/Admin'
import AdminHome from './Components/Admin Section/AdminHome'
import AdminCategories from './Components/Admin Section/AdminCategories'
import Students from '../src/Components/Admin Section/Students'
import Tutors from '../src/Components/Admin Section/Tutors'
import AdminNotifications from './Components/Admin Section/AdminNotifications'
import AdminSetting from './Components/Admin Section/AdminSetting'



function App() {

  return (

    <BrowserRouter>


                <Routes>
                   {/* Main Routing*/}
                    <Route path='/' element={<LandingPage/>}/>   
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Forgetpass' element={<ForgotPass/>}/>
                    <Route path='/Otpver' element={<OtpVerification/>}/>
                    <Route path='/Resetpass' element={<ResetPass/>}/>                    
            

                  {/* Student Nested Routing*/}
                  <Route path='/Student' element={<Student/>}>
                  <Route index element={<StudentHome/>}/>
                  <Route path='Category' element={<StudentCategory/>}/>
                  <Route path='NearbyTeachers' element={<NearbyTeachers/>}/>
                  <Route path='SavedTeachers' element={<SavedTeachers/>}/> 
                  <Route path='Messages' element={<StudentMessages/>}/> 
                  <Route path='Notifications' element={<StudentNotifications/>}/> 
                  <Route path='Settings' element={<StudentSetting/>}/> 
                  </Route>

                   {/* Tutor Nested Routing*/}
                  <Route path='/Tutor' element={<Tutor/>}>
                  <Route index element={<TutorHome/>}/>
                  <Route path='ProfileOverview' element={<ProfileOverview/>}/>
                  <Route path='Messages' element={<TutorMessages/>}/>
                  <Route path='Notifications' element={<TutorNotifications/>}/> 
                  <Route path='Feedback' element={<TutorFeedback/>}/> 
                  <Route path='Settings' element={<TutorSetting/>}/> 
                  </Route>

                   {/* Admin Nested Routing*/}
                  <Route path='/Admin' element={<Admin/>}>
                  <Route index element={<AdminHome/>}/>
                  <Route path='Categories' element={<AdminCategories/>}/>
                  <Route path='Students' element={<Students/>}/>
                  <Route path='Tutors' element={<Tutors/>}/> 
                  <Route path='Notifications' element={<AdminNotifications/>}/> 
                  <Route path='Settings' element={<AdminSetting/>}/> 
                  </Route>

                </Routes>
                
    
    </BrowserRouter>

  )
}

export default App
