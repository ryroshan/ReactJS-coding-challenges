import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Errorpage from './Errorpage'
import Home from './Home'

function AppRouting() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Errorpage />}/>
      </Routes>
    </div>
  )
}

export default AppRouting