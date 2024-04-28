import React, { useState } from "react";
import styles from "./AddTodoForm.module.css";

function AddTodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    onAdd(input);
    setInput("");
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlfor="To do">
          To-do Activities
        </label>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            onChange={handleInputChange}
            value={input}
            type="text"
            placeholder="Add and an Activity"
          />
          <button className={styles.button} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoForm;
