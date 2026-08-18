import React from "react";
import styles from "../css/Header.module.css";
import studentlogo from "../assets/studentlogo.png";
import { Link, useNavigate } from "react-router-dom";

function StudentHeader() {
  const navigate = useNavigate();
  function logout() {
    let msg = confirm("are you sure logout?...");
    if (msg) {
      sessionStorage.removeItem("StudentLoginDetail");
      navigate("/");
    }
  }
  return (
    <nav className={styles.NavBar}>
      <div className={styles.logodiv}>
        <div className={styles.imagediv}>
          <img src={studentlogo} alt="logo" />
        </div>
        <h2 className={styles.logoheading}>Online Exam Portal</h2>
      </div>

      <ul className={styles.ulList}>
        <li className={styles.ulItem}>
          <Link to="/student/dashboard">Quizs</Link>
        </li>
        <li className={styles.ulItem}>
          <Link to="/Allresult">Results</Link>
        </li>

        <li className={styles.ulItem}>
          <button className={styles.logoutBtn} onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default StudentHeader;
