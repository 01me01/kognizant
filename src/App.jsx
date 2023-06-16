import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/login'
import Signin from './components/signin'
import About from "./components/About"
import Mentor from "./components/mentor.jsx"

function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/signin" element={<Signin/>} />
           <Route path='/about' element={<About/>} />
           <Route path="/mentor" element={<Mentor/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
