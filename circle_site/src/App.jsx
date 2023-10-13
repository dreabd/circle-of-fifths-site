import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import Calendar from './components/Calendar/Calendar'
import MusicLibrary from './components/MusicLibrary/MusicLibrary'
import MusicPiece from './components/MusicLibrary/MusicPiece'


import { toby } from './exampleUser'

function App() {
  return (
    <div className='page-layout'>
      <Navbar user={toby} />
      <div className='homepage'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/announcements" element="Announcements" />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/music/:id" element={<MusicPiece/>} />
          <Route exact path="/music" element={<MusicLibrary />} />

        </Routes>
      </div>
    </div>
  )
}

export default App
