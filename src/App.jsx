import './App.css'
import './main.css'
import Header from './components/Header'
import Services from './sections/Services'
import RecentWork from './sections/RecentWork'
import Intro from './sections/Intro'

function App() {

  return (
    <body>
      <Header/>
      <Intro/>
      <Services/>
      <RecentWork/>
    </body>
  )
}

export default App
