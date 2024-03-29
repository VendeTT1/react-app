import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './component/login'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
<<<<<<< HEAD
              <Route exact path="/" element={<Login />} />
              <Route path="/react-app" element={<Login />} />
=======
              <Route path="/sign-in" element={<Login />} />
>>>>>>> e06d2d95f5814911012134cf30fe5b04136f9eb7

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App
