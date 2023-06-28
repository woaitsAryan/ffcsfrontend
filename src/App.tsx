import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Auth from './pages/login/auth'
import Login from './pages/login/login'
import Register from './pages/login/register'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Landing />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path = "/register"
          element = {<Register/>}
        />
      </Routes>
    </Router>
  )
}

export default App;
