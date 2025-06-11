import './App.css'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import LandingPage from '../src/Components/Landing Page/LandingPage'
import Register from '../src/Components/Register/Register'
import Login from '../src/Components/Login/Login'
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
import admin from '../src/Components/Admin Section/admin'
import adminHome from '../src/Components/Admin Section/adminHome'
import adminCategories from '../src/Components/Admin Section/adminCategories'
import Students from '../src/Components/Admin Section/Students'
import Tutors from '../src/Components/Admin Section/Tutors'
import adminNotifications from '../src/Components/Admin Section/adminNotifications'
import adminSetting from '../src/Components/Admin Section/adminSetting'



function App() {

  return (

    <BrowserRouter>


                <Routes>
                    <Route path='/' element={<LandingPage/>}/>   
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/Login' element={<Login/>}/>
            

                  <Route path='/Student' element={<Student/>}>
                  <Route index element={<StudentHome/>}/>
                  <Route path='Category' element={<StudentCategory/>}/>
                  <Route path='NearbyTeachers' element={<NearbyTeachers/>}/>
                  <Route path='SavedTeachers' element={<SavedTeachers/>}/> 
                  <Route path='Messages' element={<StudentMessages/>}/> 
                  <Route path='Notifications' element={<StudentNotifications/>}/> 
                  <Route path='Settings' element={<StudentSetting/>}/> 
                  </Route>


                  <Route path='/Tutor' element={<Tutor/>}>
                  <Route index element={<TutorHome/>}/>
                  <Route path='ProfileOverview' element={<ProfileOverview/>}/>
                  <Route path='Messages' element={<TutorMessages/>}/>
                  <Route path='Notifications' element={<TutorNotifications/>}/> 
                  <Route path='Feedback' element={<TutorFeedback/>}/> 
                  <Route path='Settings' element={<TutorSetting/>}/> 
                  </Route>

                  <Route path='/admin' element={<admin/>}>
                  <Route index element={<adminHome/>}/>
                  <Route path='Categories' element={<adminCategories/>}/>
                  <Route path='Students' element={<Students/>}/>
                  <Route path='Tutors' element={<Tutors/>}/> 
                  <Route path='Notifications' element={<adminNotifications/>}/> 
                  <Route path='Settings' element={<adminSetting/>}/> 
                  </Route>

                </Routes>
                
    
    </BrowserRouter>

  )
}

export default App
