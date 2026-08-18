import React, { useRef, useState } from "react";
import style from "../css/Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import useCallAxios from "../CustomHooks/useCallAxios";

function RegisterTeacher() {
  let navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    teacher_name: "",
    email: "",
    Passkey: "",
    password: "",
    Confirmpassword: "",
  });

  let nameerror = useRef();
  let emailerror = useRef();
  let passworderror = useRef();
  let Confirmerror = useRef();
  let codeerror = useRef();

  function validation() {
    nameerror.current.innerText = "";
    emailerror.current.innerText = "";
    passworderror.current.innerText = "";
    Confirmerror.current.innerText = "";
    codeerror.current.innerText = "";

    let count = 0;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formdata.teacher_name.trim() === "") {
      nameerror.current.innerText = "Plz enter a valid Name";
      count++;
    }
    if (
      formdata.email.trim() === "" ||
      !emailRegex.test(formdata.email.trim())
    ) {
      emailerror.current.innerText = "Plz enter a valid Email";
      count++;
    }

    if (formdata.Passkey.trim() === "") {
      codeerror.current.innerText = "Plz enter a valid Pass_key";
      count++;
    }
    if (formdata.password.trim() === "") {
      passworderror.current.innerText = "Plz enter a password";
      count++;
    }
    if (
      formdata.password.trim() !== formdata.Confirmpassword.trim() ||
      formdata.Confirmpassword.trim() === ""
    ) {
      Confirmerror.current.innerText =
        "password and confirm password is not match";
      count++;
    }

    if (count === 0) {
      return true;
    }
    return false;
  }

  function setdata(ev) {
    let name = ev.target.name;
    let value = ev.target.value;
    setFormdata({ ...formdata, [name]: value });
  }

  async function submitform(ev) {
    ev.preventDefault();
    if (validation()) {
      try {
        let result = await useCallAxios("POST", "teacher/register", formdata);
        console.log(result);
        if (result.status === true) {
          alert(result.msg);
          navigate("/login/teacher");
        }
      } catch (err) {
        alert(err.response.data.msg);
      }
    }
  }

  return (
    <div className={style.parent}>
      <div className={style.child}>
        <h2>TEACHER REGISTER</h2>

        <form className={style.form} onSubmit={submitform}>
          <input
            type="text"
            placeholder=" Teacher Full Name"
            name="teacher_name"
            onChange={(ev) => setdata(ev)}
          />
          <span ref={nameerror} className={style.errormsg}></span>
          <input
            type="email"
            placeholder="Teacher Email ID"
            name="email"
            onChange={(ev) => setdata(ev)}
          />
          <span ref={emailerror} className={style.errormsg}></span>
          <input
            type="text"
            placeholder="Pass_key"
            name="Passkey"
            onChange={(ev) => setdata(ev)}
          />
          <span ref={codeerror} className={style.errormsg}></span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(ev) => setdata(ev)}
          />
          <span ref={passworderror} className={style.errormsg}></span>
          <input
            type="password"
            placeholder="Confirm Password"
            name="Confirmpassword"
            onChange={(ev) => setdata(ev)}
          />
          <span ref={Confirmerror} className={style.errormsg}></span>

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
