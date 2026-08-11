import React, { useRef, useState } from "react";
import Logo from "../assets/react.svg";
import styles from "../css/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import useCallAxios from "../CustomHooks/useCallAxios";

function Login(props) {
  // const navigate = useNavigate();
  // let teacherdetail = sessionStorage.getItem("StudentLoginDetail");
  // let tdetail = JSON.parse(teacherdetail)[0];
  // console.log(tdetail);

  const loginrole = props.role;

  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
    role: loginrole,
  });

  function setdata(e) {
    const val = e.target.value;
    const key = e.target.name;

    setLogindata({
      ...logindata,
      [key]: val,
    });
  }

  let emailerror = useRef();
  let passerror = useRef();

  function validation() {
    emailerror.current.innerText = "";
    passerror.current.innerText = "";
    let errcount = 0;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(logindata.email.trim())) {
      emailerror.current.innerText = "Please enter a valid email";
      errcount++;
    }

    if (logindata.password.trim() === "") {
      passerror.current.innerText = "Please enter a valid password";
      errcount++;
    }
    if (errcount === 0) {
      return true;
    }

    return false;
  }

  async function loginsubmit(ev) {
    ev.preventDefault();
    if (validation()) {
      if (logindata.role === "student") {
        try {
          const response = await useCallAxios(
            "POST",
            "student/login",
            logindata,
          );
          if (response.status === true) {
            alert(response.msg);
            sessionStorage.setItem(
              "StudentLoginDetail",
              JSON.stringify(response.data),
            );
            navigate("/student/dashboard");
          }
        } catch (err) {
          alert(err.response.data.msg);
        }
      }

      if (logindata.role === "teacher") {
        try {
          const response = await useCallAxios(
            "POST",
            "teacher/login",
            logindata,
          );
          if (response.status === true) {
            alert(response.msg);
            sessionStorage.setItem(
              "teacherLoginDetail",
              JSON.stringify(response.data),
            );
            navigate("/teacher/dashboard");
          }
        } catch (err) {
          alert(err.response.data.msg);
        }
      }
    }
  }

  return (
    <div className={styles.Parent}>
      <div className={styles.Child}>
        <form className={styles.form} onSubmit={loginsubmit}>
          <div className={styles.Logodiv}>
            <img src={Logo} alt="no image" className={styles.Loginlogo} />
          </div>

          <h2 className={styles.heading}>
            {loginrole === "student" ? "Student Login" : "Teacher Login"}
          </h2>

          <div className={styles.inputdiv}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setdata(e)}
            />
          </div>
          <span ref={emailerror} className={styles.errormsg}></span>
          <div className={styles.inputdiv}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setdata(e)}
            />
          </div>
          <span ref={passerror} className={styles.errormsg}></span>

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
