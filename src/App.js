import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </div>
  );
}

export default App;
