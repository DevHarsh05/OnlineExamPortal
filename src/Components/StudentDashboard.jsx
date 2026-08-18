import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/StudentDashboard.module.css";
import StudentTestlist from "./StudentTestlist";
import useCallAxios from "../CustomHooks/useCallAxios";
import useSessionData from "../CustomHooks/useSessionData";

function StudentDashboard() {
  const navigate = useNavigate();
  const CheckLogin = useSessionData("StudentLoginDetail");
  let token = CheckLogin.token;

  useEffect(() => {
    if (!CheckLogin) {
      navigate("/login/student");
    }
  }, []);

  const [tests, setTests] = useState([]);

  async function getTests() {
    try {
      let callapi = await useCallAxios("GET", "student/gettest", null, token);
      if (callapi.status === true) {
        setTests(callapi.data);
      }
    } catch (err) {
      console.log(err.response.data.msg);
    }
  }

  useEffect(() => {
    getTests();
  }, []);

  function TestAttempt(testid) {
    let suremsg = confirm("are you sure attempt a this test");
    if (suremsg) {
      alert(testid);
      navigate(`/student/dashboard/quiz/${testid}`);
    }
  }
  console.log(tests, "kya hua bhia ????");
  return (
    <div className={styles.dashboard}>
      <section className={styles.testSection}>
        <div className={styles.sectionTop}>
          <h2>Student Name : Harsh tare</h2>

          <div className={styles.searchBox}>
            <span>🔍</span>

            <input type="text" placeholder="Search Test..." />
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.tablemain}>
            <thead className={styles.theading}>
              <tr>
                <th>Test ID</th>
                <th>Test Title</th>
                <th>Total No of Questions</th>
                <th>Total Marks</th>
                <th>Action</th>
              </tr>
            </thead>
            <StudentTestlist
              tests={tests}
              Attempt={TestAttempt}
            ></StudentTestlist>
          </table>
        </div>
      </section>
    </div>
  );
}
export default StudentDashboard;
