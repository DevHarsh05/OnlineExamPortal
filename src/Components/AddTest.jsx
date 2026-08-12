import React, { useRef, useState } from "react";
import styles from "../css/AddTest.module.css";

function AddTest() {
  const [Allque, setAllque] = useState([]);
  const [oneque, setQneque] = useState({
    title: "",
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
  });
  const [indexnumber, setIndexnumber] = useState(1);

  function enterdata(e) {
    let value = e.target.value;
    let name = e.target.name;
    setQneque({ ...oneque, [name]: value });
  }

  let filedserror = useRef();
  let title_error = useRef();

  function validation() {
    let errorcount = 0;
    filedserror.current.innerText = "";
    title_error.current.innerText = "";
    if (
      oneque.question == "" ||
      oneque.optionA == "" ||
      oneque.optionB == "" ||
      oneque.optionC == "" ||
      oneque.optionD == "" ||
      oneque.correctAnswer == ""
    ) {
      filedserror.current.innerText = "All Fields Are Required";
      errorcount++;
    }

    if (oneque.title == "") {
      title_error.current.innerText = "Tittle IS Compulosory";
      errorcount++;
    }

    if (errorcount === 0) {
      return true;
    } else {
      return false;
    }
  }

  function Prevbutton() {
    validation();
  }

  function Nextbutton() {
    if (validation()) {
      setAllque([...Allque, { [`QueNo${indexnumber}`]: oneque }]);
      alert(`QueNo : ${indexnumber} Added`);
      setQneque({
        title: oneque.title,
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: "",
      });
      setIndexnumber((prev) => prev + 1);
    }
  }

  function submittest(ev) {
    ev.preventDefault();

    if (validation()) {
      try {
        let sure = confirm("test Submit?");
        if (sure) {
          alert("Your Test submit done");
        }
        console.log("hyy");
      } catch (err) {
        alert(err);
      }
    }
  }

  console.log(oneque);
  console.log(Allque);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Create New Test</h1>

      <div className={styles.inputGroup}>
        <label htmlFor="title">Test Title</label>
        <input
          type="text"
          placeholder="Enter test title (e.g., Final Physics Exam)"
          id="title"
          name="title"
          value={oneque.title}
          onChange={(e) => enterdata(e)}
          className={styles.inputField}
        />
      </div>
      <p ref={title_error} className={styles.errorbox}></p>

      <h2 className={styles.sectionTitle}>Question Number : {indexnumber}</h2>

      <form onSubmit={submittest}>
        <div className={styles.inputGroup}>
          <label htmlFor="question">Enter Question</label>
          <input
            type="text"
            placeholder="Enter question Here"
            id="question"
            name="question"
            value={oneque.question}
            onChange={(e) => enterdata(e)}
            className={styles.inputField}
          />
        </div>

        <div className={styles.optionsGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="optionA">Option A</label>
            <input
              type="text"
              placeholder="Option A"
              id="optionA"
              name="optionA"
              value={oneque.optionA}
              onChange={(e) => enterdata(e)}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="optionB">Option B</label>
            <input
              type="text"
              placeholder="Option B"
              id="optionB"
              name="optionB"
              value={oneque.optionB}
              onChange={(e) => enterdata(e)}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="optionC">Option C</label>
            <input
              type="text"
              placeholder="Option C"
              id="optionC"
              name="optionC"
              value={oneque.optionC}
              onChange={(e) => enterdata(e)}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="optionD">Option D</label>
            <input
              type="text"
              placeholder="Option D"
              id="optionD"
              name="optionD"
              value={oneque.optionD}
              onChange={(e) => enterdata(e)}
              className={styles.inputField}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="correctAnswer">Correct Answer</label>
          <select
            id="correctAnswer"
            name="correctAnswer"
            value={oneque.correctAnswer}
            onChange={(e) => enterdata(e)}
            className={styles.selectField}
          >
            <option value="" disabled>
              Select Correct Option
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <p ref={filedserror} className={styles.errorbox}></p>
        <div className={styles.navigationButtons}>
          <button type="button" className={styles.btnNav} onClick={Prevbutton}>
            ← Prev
          </button>
          <button type="button" className={styles.btnNav} onClick={Nextbutton}>
            Next →
          </button>
        </div>

        <div className={styles.submitContainer}>
          <button type="submit" className={styles.btnSubmit}>
            Save Test
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTest;
