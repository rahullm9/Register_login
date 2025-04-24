import React from 'react'
import Signup from './signup'
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
