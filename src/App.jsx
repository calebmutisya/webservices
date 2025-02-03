import './App.css'
import './main.css'
import Header from './components/Header'
import Services from './sections/Services'
import RecentWork from './sections/RecentWork'
import Intro from './sections/Intro'
import WorkSkills from './sections/WorkSkills'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'

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
    </body>
  )
}

export default App
