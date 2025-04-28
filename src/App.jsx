import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./app/Homepage/Homepage.jsx";
import InstituteInfo from './app/Profile/InstituteInfo/InstituteInfo.jsx';
import Faculty from './app/Profile/Faculty/Faculty.jsx';
import Courses from './app/Profile/Courses/Courses.jsx';
import Batches from './app/Profile/Batches/Batches.jsx';
import Media from "./app/Profile/Media/Media.jsx";
import ServicesOffered from './app/Profile/ServicesOffered/ServicesOffered.jsx';
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/institute-info" element={<InstituteInfo />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/batches" element={<Batches />} />
      <Route path="/media" element={<Media />} />
      <Route path="/services" element={<ServicesOffered />} />
      </Routes>
    </>
  );
}

export default App;
