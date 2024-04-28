import React, { useState } from "react";
import styles from "./TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDownload, faTimes } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ todo, removeTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };
  const handleSave = () => {
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  return (
    <div className={styles.itemContainer}>
      <li className={styles.li}>
        {isEditing ? (
          <>
            <input
              className={styles.input}
              type="text"
              onChange={handleTextChange}
              value={editedText}
            ></input>
            <button onClick={handleSave}>
              <FontAwesomeIcon icon={faDownload} style={{ color: "blue" }} />
            </button>
            <button onClick={handleCancel}>
              <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
            </button>
          </>
        ) : (
          <>
            <div className={styles.input1}>
              <input
                type="checkbox"
                onClick={handleToggleComplete}
                checked={todo.completed}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={handleEdit}>
                <FontAwesomeIcon icon={faPen} style={{ color: "green" }} />
              </button>
              <button onClick={handleRemove} aria-label="remove button">
                <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
              </button>
            </div>
          </>
        )}
      </li>
    </div>
  );
}
export default TodoItem;
