import React from "react";
import style from "../css/Register.module.css";
import { Link } from "react-router-dom";

function RegisterStudent() {
  return (
    <div className={style.parent}>
      <div className={style.child}>
        <h2>STUDENT REGISTER</h2>

        <form className={style.form}>
          <input type="text" placeholder=" Student Full Name" required />
          <input type="email" placeholder="Student ID /  Email" required />
          <input type="text" placeholder="Class" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit" className={style.teacherButton}>
            Create Teacher Account
          </button>
        </form>

        <p className={style.bottompara}>
          Already have an account? <Link to="/login/teacher">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterStudent;
