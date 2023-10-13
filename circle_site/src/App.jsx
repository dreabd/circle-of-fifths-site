import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import Calendar from './components/Calendar/Calendar'

import { toby } from './exampleUser'

function App() {
  return (
    <div className='page-layout'>
      <Navbar user={toby}/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/announcements" element="Announcements" />
        <Route exact path="/calendar" element={ <Calendar/>} />

      </Routes>
    </div>
  )
}

export default App
