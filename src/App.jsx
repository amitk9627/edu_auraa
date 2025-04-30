import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./app/Homepage/Homepage.jsx";
import InstituteDetail from "./app/Profile/InstituteDetail.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainProfile from "./app/MainProfile/MainProfile.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institute-info" element={<InstituteDetail />} />
        <Route path="/my-profile" element={<MainProfile />} />

        {/* <Route path="/faculty" element={<Faculty />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/batches" element={<Batches />} />
      <Route path="/media" element={<Media />} />
      <Route path="/services" element={<ServicesOffered />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
