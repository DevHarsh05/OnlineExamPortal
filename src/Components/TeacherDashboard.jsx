import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/TeacherDashboard.module.css";
import TeacherTestlist from "./TeacherTestlist";

function TeacherDashboard() {
  // const navigate = useNavigate();

  // const teacherdetail = sessionStorage.getItem("teacherLoginDetail");
  // let tdetail = JSON.parse(teacherdetail);
  // console.log(tdetail);

  // const { teacher_name, tid } = tdetail;
  // if (!teacherdetail) {
  //   navigate("/login/teacher");
  // }

  let teacher_name = "Harsh Tare";
  let tid = 101;

  // const ignore = (
  //   <tr>
  //     <td colSpan="5" className={styles.noTest}>
  //       No test found
  //     </td>
  //   </tr>
  // );

  const [search, setSearch] = useState("");

  const [tests, setTests] = useState([
    {
      test_id: "T001",
      title: "JavaScript Basic",
      questions: 20,
      marks: 20,
    },
    {
      test_id: "T002",
      title: "React Fundamentals",
      questions: 25,
      marks: 25,
    },
    {
      test_id: "T003",
      title: "Node.js Basics",
      questions: 15,
      marks: 15,
    },
  ]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.teacherdetails}>
        <div>
          <p className={styles.theads}>Teacher Name</p>
          <h2>{teacher_name || "Teachername"}</h2>
        </div>

        <div>
          <p className={styles.theads}>Teacher ID</p>
          <h2>{tid || "101"}</h2>
        </div>

        <Link className={styles.addButton} to={"/teacher/addtest"}>
          + Add Test
        </Link>
      </div>

      <section className={styles.testSection}>
        <div className={styles.sectionTop}>
          <h2>Your Tests</h2>

          <div className={styles.searchBox}>
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search Test..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.tablemain}>
            <thead className={styles.theading}>
              <tr>
                <th>Test ID</th>
                <th>Test Title</th>
                <th>Total No ofQuestions</th>
                <th>Total Marks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <TeacherTestlist test={tests}></TeacherTestlist>
          </table>
        </div>
      </section>
    </div>
  );
}
export default TeacherDashboard;
