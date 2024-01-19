import React, { useState } from 'react'
import { Navi, Hero, Projects, Contact, Footer,Timeline} from './components/imports.js'
import './App.css'



function App() {
  return (
    <>
      {<Navi />}
      {<Hero />}
      {<Timeline/>}
      {<Projects />}
      {<Contact />}
      {<Footer />}
    </>
  )
}

export default App
