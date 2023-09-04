import { useState } from 'react'
import { Navi, Hero, Projects, Contact, Footer } from './components/imports'
import './App.css'

function App() {
  const dark = "";
  const [theme, settheme] = useState(dark)

  return (
    <>
      <Navi />
      <Projects />
      <Contact />
    </>
  )
}

export default App
