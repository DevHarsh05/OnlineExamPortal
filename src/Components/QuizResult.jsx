import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../css/QuizResult.module.css";
import useSessionData from "../CustomHooks/useSessionData";
import { useNavigate, Link, useParams } from "react-router-dom";
import useCallAxios from "../CustomHooks/useCallAxios";

function QuizResult() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [score, setScore] = useState([]);

  const Login = useSessionData("StudentLoginDetail");
  useEffect(() => {
    if (!Login) {
      navigate("/login/student");
    }
  }, []);

  async function getResult() {
    try {
      let result = await useCallAxios(
        "GET",
        `student/getresult/${id}`,
        null,
        Login.token,
      );
      if (result.status === true) {
        alert(result.msg);
        setScore(result.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log(score);
  useEffect(() => {
    getResult();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.resultBox}>
        <div className={styles.icon}>✓</div>

        <h1>Quiz Completed</h1>

        <div className={styles.score}>
          <span className={styles.scoreNumber}>{score.marks}</span>
          <span className={styles.total}>/ {score.total_questions * 2}</span>
        </div>

        <p className={styles.percentage}>
          {(score.marks / (score.total_questions * 2)) * 100}% Score
        </p>

        <div className={styles.details}>
          <div>
            <span>Questions</span>
            <strong>{score.total_questions}</strong>
          </div>

          <div>
            <span>Correct</span>
            <strong>{score.correct}</strong>
          </div>

          <div>
            <span>Wrong</span>
            <strong>{score.wrong}</strong>
          </div>
        </div>

        <button className={styles.button}>
          <Link to={"/student/dashboard"}>Back to Dashboard</Link>
        </button>
      </div>
    </div>
  );
}

export default QuizResult;
