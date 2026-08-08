import React from "react";
import style from "../css/Register.module.css";
import { Link } from "react-router-dom";

function RegisterTeacher() {
  return (
    <div className={style.parent}>
      <div className={style.child}>
        <h2>TEACHER REGISTER</h2>

        <form className={style.form}>
          <input
            type="text"
            placeholder=" Teacher Full Name"
            required
            name="teacher_name"
          />
          <input
            type="email"
            placeholder="Teacher Email ID"
            required
            name="email"
          />
          <input
            type="text"
            placeholder="School / College Code"
            required
            name="school_code"
          />
          <input type="password" placeholder="Password" required />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            name="password"
          />

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

export default RegisterTeacher;
