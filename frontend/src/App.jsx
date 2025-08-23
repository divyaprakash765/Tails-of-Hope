import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App