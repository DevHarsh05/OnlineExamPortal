import React from "react";
import styles from "../css/TeacherDashboard.module.css";

function TeacherTestlist({ test }) {
  return (
    <tbody>
      {test !== "" ? (
        test.map((test) => (
          <tr key={test.test_id}>
            <td>{test.test_id}</td>

            <td className={styles.testTitle}>{test.title}</td>

            <td>{test.questions}</td>

            <td>{test.marks}</td>

            <td>
              <div className={styles.actionButtons}>
                <button className={styles.editButton}>Edit</button>

                <button className={styles.deleteButton}>Delete</button>
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

export default TeacherTestlist;
