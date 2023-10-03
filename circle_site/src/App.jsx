import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <>
      <h1>This is the page</h1>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/announcements" element="Announcements"/>
      </Routes>
    </>
  )
}

export default App
