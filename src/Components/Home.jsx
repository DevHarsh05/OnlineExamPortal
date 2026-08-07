import React from "react";
import { Link } from "react-router-dom";
import style from "../css/Home.module.css";
import Logo from "../assets/react.svg";

function Home() {
  return (
    <div className={style.parent}>
      <div className={style.topchild}>
        <h1 className={style.mainhead}>
          Simplifying Online Exams, Empowering Education
        </h1>
        <p className={style.subhead}>
          Secure, Easy-to-use Portal for Students & Teachers
        </p>

        <div className={style.gridbox}>
          <div className={style.studentbox}>
            <div className={style.studentdetails}>
              <h5>FOR STUDENTS:</h5>
              <p>Log in to attempt tests, view results, and track progress.</p>
              <button className={style.studentbutton}>
                <Link to={"/register/student"}>STUDENT REGISTRATION</Link>
              </button>
            </div>
            <div className={style.imagediv}>
              <img src={Logo} alt="Student Portal" />
            </div>
          </div>

          <div className={style.teacherbox}>
            <div className={style.teacherdetails}>
              <h5>FOR TEACHERS:</h5>
              <p>
                Create and manage exams, add questions, view student reports,
                and track performance.
              </p>
              <button className={style.teacherbutton}>
                <Link to={"/register/teacher"}>TEACHER REGISTRATION</Link>
              </button>
            </div>
            <div className={style.imagediv}>
              <img src={Logo} alt="Teacher Portal" />
            </div>
          </div>
        </div>
      </div>

      <div className={style.bootomchild}>
        <ul className={style.Ullist}>
          <li>
            <span className={style.icon}>🛡️</span>
            <span>SECURE PLATFORM</span>
          </li>
          <li>
            <span className={style.icon}>⏱️</span>
            <span>INSTANT RESULTS</span>
          </li>
          <li>
            <span className={style.icon}>📋</span>
            <span>MCQ & DESCRIPTIVE TESTS</span>
          </li>
          <li>
            <span className={style.icon}>👆</span>
            <span>USER-FRIENDLY</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
