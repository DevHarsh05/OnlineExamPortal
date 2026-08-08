import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/LoginChoice.module.css";

function LoginChoice() {
  return (
    <div className={styles.container}>
      <p className={styles.mainhead}>Choose Your Account Type</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>👨‍🎓 Student</h2>

          <Link to="/login/student">Student Login</Link>
        </div>

        <div className={styles.card}>
          <h2>👨‍🏫 Teacher</h2>

          <Link to="/login/teacher">Teacher Login</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginChoice;
