import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/TeacherDashboard.module.css";
import TeacherTestlist from "./TeacherTestlist";
import useCallaxios from "../CustomHooks/useCallAxios";
import useSessionData from "../CustomHooks/useSessionData";

function TeacherDashboard() {
  const navigate = useNavigate();
  let LoginData = useSessionData("teacherLoginDetail");

  useEffect(() => {
    if (!LoginData) {
      navigate("/login/teacher");
    }
  }, [LoginData]);

  const teacher_name = LoginData?.logindetail?.teacher_name;
  const teacher_id = LoginData?.logindetail?.tid;

  const [alltests, setAllTests] = useState([]);

  async function getAlltest() {
    try {
      let result = await useCallaxios(
        "GET",
        `teacher/getAllTest/${teacher_id}`,
        null,
        LoginData.token,
      );
      if (result.status == true) {
        let data = result.data;
        setAllTests(data);
      } else {
        setAllTests(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (LoginData) {
      getAlltest();
    }
  }, []);

  async function DeleteTest(testid) {
    let msg = confirm("Delte this test ?....");
    if (msg) {
      try {
        let apidelte = await useCallaxios(
          "DELETE",
          `teacher/deletetest/${testid}`,
          null,
          LoginData.token,
        );

        if (apidelte.status === true) {
          alert(apidelte.msg);
          getAlltest();
        }
      } catch (err) {
        console.log(err.response.data.msg);
      }
    }
  }

  console.log("yecheckerhai", alltests);
  return (
    <div className={styles.dashboard}>
      <div className={styles.teacherdetails}>
        <div>
          <p className={styles.theads}>Teacher Name</p>
          <h2> {teacher_name}</h2>
        </div>

        <div>
          <p className={styles.theads}>Teacher ID</p>
          <h2>{teacher_id}</h2>
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
                <th>Create Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <TeacherTestlist
              test={alltests}
              Delete={DeleteTest}
            ></TeacherTestlist>
          </table>
        </div>
      </section>
    </div>
  );
}
export default TeacherDashboard;
