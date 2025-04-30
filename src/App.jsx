import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./app/Homepage/Homepage.jsx";
<<<<<<< Updated upstream
import InstituteDetail from "./app/Profile/InstituteDetail.jsx";
// import InstituteInfo from './app/Profile/InstituteInfo/InstituteInfo.jsx';
import Faculty from "./app/Profile/Faculty/Faculty.jsx";
import Courses from "./app/Profile/Courses/Courses.jsx";
import Batches from "./app/Profile/Batches/Batches.jsx";
import Media from "./app/Profile/Media/Media.jsx";
import ServicesOffered from "./app/Profile/ServicesOffered/ServicesOffered.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
=======
import Profile from "./app/Profile/Profile.jsx";
import MainProfile from "./app/MainProfile/MainProfile.jsx";

>>>>>>> Stashed changes
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
        <Route path="/institute-info" element={<InstituteDetail />} />

        {/* <Route path="/faculty" element={<Faculty />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/batches" element={<Batches />} />
      <Route path="/media" element={<Media />} />
      <Route path="/services" element={<ServicesOffered />} /> */}
=======
        <Route path="/profile" element={<Profile />} />
        <Route path="/MainProfile" element={<MainProfile />} />
>>>>>>> Stashed changes
      </Routes>
      <Footer />
    </>
  );
}

export default App;
