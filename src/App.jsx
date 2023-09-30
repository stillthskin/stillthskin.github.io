import React, { useState } from 'react'
import { Navi, Hero, Projects, Contact, Footer } from './components/imports.js'
import './App.css'



function App() {
  const dark = "";
  const [theme, settheme] = useState(dark)

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