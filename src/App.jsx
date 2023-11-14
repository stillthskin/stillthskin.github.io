import React, { useState } from 'react'
import { Navi, Hero, Projects, Contact, Footer } from './components/imports.js'
import './App.css'



function App() {
  return (
    <>
      {<Navi />}
      {<Hero />}
      {<Projects />}
      {<Contact />}
      {<Footer />}
    </>
  )
}

export default App
