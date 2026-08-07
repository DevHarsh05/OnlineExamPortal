import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../assets/react.svg";
import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";

function Login(props) {
  let loginrole = props.role;
  console.log(loginrole);

  return (
    <div className={styles.Parent}>
      <div className={styles.Child}>
        <form className={styles.form}>
          <div className={styles.Logodiv}>
            <img src={Logo} alt="no image" className={styles.Loginlogo} />
          </div>

          <h2 className={styles.heading}>
            {loginrole == "student" ? "Student Login" : "Teacher Login"}
          </h2>

          <div className={styles.inputdiv}>
            <input type="email" placeholder="Email" />
          </div>

          <div className={styles.inputdiv}>
            <input type="password" placeholder="Password" />
          </div>

          <div className={styles.buttondiv}>
            <button type="submit">Login</button>
          </div>

          <div className={styles.anchordiv}>
            <Link to={`/register/${loginrole}`}>Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
