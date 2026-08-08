import React, { useEffect, useRef } from "react";
import { useState } from "react";
import style from "../css/Register.module.css";
import { Link } from "react-router-dom";

function RegisterStudent() {
  const [formdata, setFormdata] = useState({
    student_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function setdata(e) {
    let key = e.target.name;
    let value = e.target.value;
    setFormdata({ ...formdata, [key]: value });
  }

  const nameError = useRef();
  const emailError = useRef();
  const confirmPasswordError = useRef();
  const passworderror = useRef();

  function validation(ev) {
    nameError.current.innerText = "";
    emailError.current.innerText = "";
    confirmPasswordError.current.innerText = "";
    passworderror.current.innerText = "";

    let errcount = 0;

    if (formdata.student_name.trim() == "") {
      nameError.current.innerText = "Please Enter valid Name";
      errcount++;
    }
    if (formdata.email.trim() == "") {
      emailError.current.innerText = "Please Enter valid Name";
      errcount++;
    }
    if (formdata.password.trim() == "") {
      passworderror.current.innerText = "Plz enter a Password";
      errcount++;
    }
    if (formdata.password !== formdata.confirmPassword) {
      confirmPasswordError.current.innerText =
        "Password and Confirm Password is not matched";
      errcount++;
    }
    if (errcount == 0) {
      return true;
    }
    return false;
  }

  function submitform(ev) {
    ev.preventDefault();
    if (validation()) {
      alert("succes");
      console.log("Form submmit success", formdata);
    }
  }

  return (
    <div className={style.parent}>
      <div className={style.child}>
        <h2>STUDENT REGISTER</h2>

        <form className={style.form} onSubmit={submitform}>
          <input
            type="text"
            placeholder=" Student Full Name"
            name="student_name"
            onChange={(e) => setdata(e)}
          />
          <span ref={nameError}></span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setdata(e)}
          />
          <span ref={emailError}></span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setdata(e)}
          />
          <span ref={passworderror}></span>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => setdata(e)}
          />
          <span ref={confirmPasswordError}></span>

          <button type="submit" className={style.teacherButton}>
            Create Student Account
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
