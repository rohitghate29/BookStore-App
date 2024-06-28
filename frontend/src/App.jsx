import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import CoursePage from './components/Course/CoursePage'
import Signup from './components/signup/Signup';
import Contact from './components/contact/Contact';


function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App