import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

function TodoList({ todos, removeTodo, toggleComplete, editTodo }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>To-do list:</h4>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
