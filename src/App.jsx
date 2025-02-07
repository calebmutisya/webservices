import './App.css'
import './main.css'
import Header from './sections/Header'
import Services from './sections/Services'
import RecentWork from './sections/RecentWork'
import Intro from './sections/Intro'
import WorkSkills from './sections/WorkSkills'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {

  return (
    <body>
      <Header/>
      <Intro/>
      <Services/>
      <RecentWork/>
      <WorkSkills/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </body>
  )
}

export default App
