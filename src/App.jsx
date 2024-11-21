import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';

import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import Experiences from './components/Experiences';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
