import './App.css'
import './main.css'
import Header from './components/Header'
import Services from './sections/Services'
import RecentWork from './sections/RecentWork'
import Intro from './sections/Intro'
import WorkSkills from './sections/WorkSkills'
import Testimonials from './sections/Testimonials'

function App() {

  return (
    <body>
      <Header/>
      <Intro/>
      <Services/>
      <RecentWork/>
      <WorkSkills/>
      <Testimonials/>
    </body>
  )
}

export default App
