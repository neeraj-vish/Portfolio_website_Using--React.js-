import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contract from './components/Contract'
import Aos from 'aos'
import 'aos/dist/aos.css'


const App = () => {
  useEffect(()=>{
  Aos.init();
  },[])

  return (
    <>
     <Navbar></Navbar> 
     <div className="container">
      <Home></Home>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>
      <Contract></Contract>
     </div>
    </>
  )
}

export default App
