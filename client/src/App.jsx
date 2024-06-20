import React from 'react'
import Home from './pages/home'
import "./font/css/all.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './pages/form'
import Profile from './pages/profile'
import Create from './pages/newUser'

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Form />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/create' element={<Create />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App