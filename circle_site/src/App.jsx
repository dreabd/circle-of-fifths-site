import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'

import { toby } from './exampleUser'

function App() {
  return (
    <>
      <Navbar user={toby}/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/announcements" element="Announcements" />
      </Routes>
    </>
  )
}

export default App
