import React from "react";
import Logo from "../assets/react.svg";
import styles from "../css/Header.module.css";
import studentlogo from "../assets/studentlogo.png";
import { Link } from "react-router-dom";

function Header() {
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
          <Link to="/">Home</Link>
        </li>

        <li className={styles.ulItem}>
          <Link to="/logintype">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
