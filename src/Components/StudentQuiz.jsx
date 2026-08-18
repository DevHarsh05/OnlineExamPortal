import React, { useEffect, useRef, useState } from "react";
import useSessionData from "../CustomHooks/useSessionData";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../css/StudentQuiz.module.css";
import useCallAxios from "../CustomHooks/useCallAxios";

function StudentQuiz() {
  const testid = useParams();
  const navigate = useNavigate();
  const Login = useSessionData("StudentLoginDetail");

  const [title, setTitle] = useState("");
  const [Allquestion, setAlluestion] = useState([]);
  const [oneque, setOneque] = useState({});
  const [indexnum, setIndexnum] = useState(0);

  const [tick, setTick] = useState({});
  const changetext = useRef();

  useEffect(() => {
    if (!Login) {
      navigate("/login/student");
    }
  }, []);

  async function getTestque() {
    try {
      let getque = await useCallAxios(
        "GET",
        `student/testque/${testid.id}`,
        null,
        Login.token,
      );
      if (getque.status === true) {
        setAlluestion(getque.data);
        setOneque(getque.data[0]);
        setTitle(getque.data[0].test_tittle);
      }
    } catch (err) {
      console.log(err.response.data.msg);
    }
  }

  useEffect(() => {
    getTestque();
  }, []);

  function enterTick(op) {
    setTick({ ...tick, [indexnum]: op });
  }

  function MarksCalulate() {
    let marks = 0;
    Allquestion.forEach((que, index) => {
      let write = que.correct_answer;
      let student_tick = tick[index];

      if (write === student_tick) {
        marks += 2;
      }
    });

    return marks;
  }

  function NextQue() {
    if (!tick[indexnum]) {
      alert("plz select any option");
      return false;
    }

    if (indexnum < Allquestion.length - 1) {
      setOneque(Allquestion[indexnum + 1]);
      setIndexnum((last) => last + 1);
    } else {
      changetext.current.innerText = "submit";
      let msg = confirm("are you sure test submit ?...");
      if (msg === true) {
        submitTest();
      }
    }
  }

  function PrevQue() {
    if (indexnum !== 0) {
      alert("back");
      setIndexnum((last) => last - 1);
      setOneque(Allquestion[indexnum - 1]);
    } else {
      alert("plz click next");
    }
  }

  async function submitTest(ev) {
    let mark = MarksCalulate();
    try {
      let correct = mark / 2;
      let wrong = Allquestion.length - correct;

      let data = {
        test_id: testid.id,
        student_id: Login.logindetail.sid,
        totalque: Allquestion.length,
        marks: mark,
        correct: correct,
        wrong: wrong,
      };
      console.log(data);
      alert("109 par");

      let sendresult = await useCallAxios(
        "POST",
        "student/saveresult",
        data,
        Login.token,
      );
      console.log(sendresult);
      if (sendresult.status === true) {
        alert(sendresult.msg);
        alert(sendresult.id);
        navigate(`/result/${sendresult.id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log("all Q", Allquestion);
  console.log("singge Q ", oneque);
  console.log("index state", indexnum);
  console.log("mers title ", title);
  console.log("TICK ", tick);

  return (
    <div className={styles.page}>
      <div className={styles.quiz}>
        <div className={styles.top}>
          <h2>Title : {title}</h2>

          <div className={styles.timer}>⏱ 09:42</div>
        </div>

        <div className={styles.body}>
          <div className={styles.questionTop}>
            <h3>Q : {oneque.question}</h3>

            <span>
              {indexnum + 1} / {Allquestion.length}
            </span>
          </div>

          <div className={styles.options}>
            <button className={styles.option} onClick={() => enterTick("A")}>
              <span className={styles.letter}>A</span>
              <span>{oneque.op1}</span>
            </button>

            <button className={styles.option} onClick={() => enterTick("B")}>
              <span className={styles.letter}>B</span>
              <span>{oneque.op2}</span>
            </button>

            <button className={styles.option} onClick={() => enterTick("C")}>
              <span className={styles.letter}>C</span>
              <span>{oneque.op3}</span>
            </button>

            <button className={styles.option} onClick={() => enterTick("D")}>
              <span className={styles.letter}>D</span>
              <span>{oneque.op4}</span>
            </button>
          </div>

          <div className={styles.line}></div>
          <div className={styles.buttons}>
            <button className={styles.prev} onClick={PrevQue}>
              Previous
            </button>

            <div className={styles.rightButtons}>
              <button className={styles.next} onClick={NextQue} type="button">
                <span ref={changetext}>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentQuiz;
