import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/login'
function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
