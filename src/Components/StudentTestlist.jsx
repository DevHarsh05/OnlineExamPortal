import React from "react";
import styles from "../css/StudentDashboard.module.css";
import useCallAxios from "../CustomHooks/useCallAxios";

function StudentTestlist({ tests, Attempt }) {
  return (
    <tbody>
      {tests.length > 0 ? (
        tests.map((test) => (
          <tr key={test.test_id}>
            <td>T{test.test_id}</td>

            <td className={styles.testTitle}>{test.test_tittle}</td>

            <td>{test.qtotal} Ques..</td>

            <td>{test.qtotal * 2} Marks</td>

            <td>
              <div className={styles.actionButtons}>
                <button
                  className={styles.editButton}
                  onClick={() => Attempt(test.test_id)}
                >
                  Attempt
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" className={styles.noTest}>
            No test found
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default StudentTestlist;
