import './App.css'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import LandingPage from '../src/Components/Landing Page/LandingPage'
import Register from '../src/Components/Register/Register'
import Login from '../src/Components/Login/Login'

function App() {

  return (

    <BrowserRouter>


                <Routes>

                    <Route path='/' Component={<LandingPage/>}/>   
                    <Route path='/Register' Component={<Register/>}/>
                    <Route path='/Login' Component={<Login/>}/>
                  
                </Routes>

                
    
    </BrowserRouter>

  )
}

export default App
