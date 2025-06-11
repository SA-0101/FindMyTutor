import './App.css'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import LandingPage from '../src/Components/Landing Page/LandingPage'
import Register from '../src/Components/Register/Register'
import Login from '../src/Components/Login/Login'
import Student from '../src/Components/Student Section/Student'
import Home from '../src/Components/Student Section/Home'
import Category from '../src/Components/Student Section/Category'
import NearbyTeachers from '../src/Components/Student Section/NearbyTeachers'
import SavedTeachers from '../src/Components/Student Section/SavedTeachers'
import Messages from '../src/Components/Student Section/Messages'
import Notifications from '../src/Components/Student Section/Notifications'
import Setting from '../src/Components/Student Section/Setting'
import Tutor from '../src/Components/Tutor Section/Tutor'
import Home from '../src/Components/Tutor Section/Home'
import ProfileOverview from '../src/Components/Tutor Section/ProfileOverview'
import Messages from '../src/Components/Tutor Section/Messages'
import Notifications from '../src/Components/Tutor Section/Notifications'
import Feedback from '../src/Components/Tutor Section/Feedback'
import Setting from '../src/Components/Tutor Section/Setting'


function App() {

  return (

    <BrowserRouter>


                <Routes>
                    <Route path='/' element={<LandingPage/>}/>   
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/Login' element={<Login/>}/>
                </Routes>

                <Routes>

                  <Route path='Student' element={<Student/>}>
                  <Route index element={<Home/>}/>
                  <Route path='Category' element={<Category/>}/>
                  <Route path='NearbyTeachers' element={<NearbyTeachers/>}/>
                  <Route path='SavedTeachers' element={<SavedTeachers/>}/> 
                  <Route path='Messages' element={<Messages/>}/> 
                  <Route path='Notifications' element={<Notifications/>}/> 
                  <Route path='Settings' element={<Setting/>}/> 
                  </Route>

                </Routes>

                  <Routes>

                  <Route path='Tutor' element={<Tutor/>}>
                  <Route index element={<Home/>}/>
                  <Route path='ProfileOverview' element={<ProfileOverview/>}/>
                  <Route path='Messages' element={<Messages/>}/>
                  <Route path='Notifications' element={<Notifications/>}/> 
                  <Route path='Feedback' element={<Feedback/>}/> 
                  <Route path='Settings' element={<Setting/>}/> 
                  </Route>

                </Routes>
                
    
    </BrowserRouter>

  )
}

export default App
