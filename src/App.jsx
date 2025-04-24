import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./app/Homepage/Homepage.jsx";
import Profile from "./app/Profile/Profile.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
