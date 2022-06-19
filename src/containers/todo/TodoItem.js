import React from "react";
import "./Todoitem.css";

function TodoItem({ todo, toggleTodo, removeTodo }) {
  const todoClasses = `todo-item` + (todo.completed ? ` done` : ` not-done`);
  const todoTextClasses = todo.completed ? ` done` : ``;

  return (
    <>
      <div className={todoClasses}>
        <div>
          <div className={todoTextClasses}>{todo.text}</div>
          <div className="sub-text">{JSON.stringify(todo.timeCreated)}</div>
        </div>
        <div className="todo-item-actions">
          <button
            className="toggle"
            onClick={() => toggleTodo(todo.id)}
            date-testid="toggle-todo-button"
          >
            Toggle
          </button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
