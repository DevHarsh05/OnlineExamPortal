import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Home from "./Components/Home";
import LoginChoice from "./Components/LoginChoice";
import Footer from "./Components/Footer";
import RegisterStudent from "./Components/RegisterStudent";
import RegisterTeacher from "./Components/RegisterTeacher";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/logintype" element={<LoginChoice />} />
        <Route path="/login/student" element={<Login role="student" />} />
        <Route path="/login/teacher" element={<Login role="teacher" />} />

        <Route path="/register/student" element={<RegisterStudent />} />
        <Route path="/register/teacher" element={<RegisterTeacher />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
