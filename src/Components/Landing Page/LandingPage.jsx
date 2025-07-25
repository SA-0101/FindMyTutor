import Navbar from '../Landing Page/Navbar'
import LandingBanner from '../Landing Page/LandingBanner'
import KeyFeature from '../Landing Page/KeyFeature'
import Work from '../Landing Page/Work'
import Categories from '../Landing Page/Categories'
import TeacherShowcase from '../Landing Page/TeacherShowcase'
import Achievements from '../Landing Page/Achievements'
import About from '../Landing Page/About'
import FAQs from '../Landing Page/FAQs'
import Contact from '../Landing Page/Contact'
import Footer from '../Landing Page/Footer'

function LandingPage() {
  return (
    <div className='w-full'>
        
        <Navbar/>
        <LandingBanner/>
        <KeyFeature/>
        <Work/>
        <Categories/>
        <TeacherShowcase/>
        <Achievements/>
        <About/>
        <FAQs/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default LandingPage
