import React,{ useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css'
import Home from './Components/Home'
import Course from './Components/Courses';
import Contact from './Components/Contact';
import CourseDetail from './Components/CourseDetail';
import About from './Components/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;