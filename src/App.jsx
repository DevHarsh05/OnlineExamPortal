import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import StudentHeader from "./Components/StudentHeader";
import TeacherHeader from "./Components/TeacherHeader";
import Home from "./Components/Home";
import Login from "./Components/Login";
import LoginChoice from "./Components/LoginChoice";
import Footer from "./Components/Footer";
import RegisterStudent from "./Components/RegisterStudent";
import RegisterTeacher from "./Components/RegisterTeacher";
import StudentDashboard from "./Components/StudentDashboard";
import TeacherDashboard from "./Components/TeacherDashboard";
import AddTest from "./Components/AddTest";
import StudentQuiz from "./Components/StudentQuiz";
import QuizResult from "./Components/QuizResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/logintype"
          element={
            <>
              <Header />
              <LoginChoice />
              <Footer />
            </>
          }
        />

        <Route
          path="/login/student"
          element={
            <>
              <Header />
              <Login role="student" />
              <Footer />
            </>
          }
        />

        <Route
          path="/login/teacher"
          element={
            <>
              <Header />
              <Login role="teacher" />
              <Footer />
            </>
          }
        />

        <Route
          path="/register/student"
          element={
            <>
              <Header />
              <RegisterStudent />
              <Footer />
            </>
          }
        />

        <Route
          path="/register/teacher"
          element={
            <>
              <Header />
              <RegisterTeacher />
              <Footer />
            </>
          }
        />

        <Route
          path="/student/dashboard"
          element={
            <>
              <StudentHeader />
              <StudentDashboard />
            </>
          }
        />
        <Route
          path="/student/dashboard/quiz/:id"
          element={
            <>
              <StudentHeader />
              <StudentQuiz />
              <Footer />
            </>
          }
        />
        <Route
          path="/result/:id"
          element={
            <>
              <StudentHeader />
              <QuizResult></QuizResult>
              <Footer />
            </>
          }
        />
        <Route
          path="/teacher/dashboard"
          element={
            <>
              <TeacherHeader />
              <TeacherDashboard />
            </>
          }
        />

        <Route
          path="/teacher/addtest"
          element={
            <>
              <TeacherHeader />
              <AddTest />
            </>
          }
        />

        <Route path="*" element={<p>404 Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
