import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import TodoItem from "./todo/TodoItem";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (!todo) return;
    dispatch({
      type: "ADD_TODO",
      id: todos.length,
      text: todo,
    });
    setTodo("");
  };

  const toggleTodo = (id) => {
    dispatch({
      type: "TOGGLE_TODO",
      id,
    });
  };

  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      id,
    });
  };

  return (
    <div className="todo-container">
      <div className="my-2">
        <h1 className="text-center text-2xl">Todo List</h1>
      </div>

      <input
        type="text"
        data-testid="todo-input"
        value={todo}
        placeholder="Add a todo"
        onChange={handleChange}
        className="shadow border w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
      />
      <button
        data-testid="add-todo-button"
        onClick={addTodo}
        className="my-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Add todo
      </button>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default Todo;
