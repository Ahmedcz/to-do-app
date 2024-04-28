import React, { useState } from "react";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => [todo, ...prevTodos]);
  };
  const removeTodo = (todoIdToRemove) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoIdToRemove));
  };

  const toggleComplete = (todoId) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (todoId, newText) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
