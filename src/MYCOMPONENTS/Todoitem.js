import React from "react";
import "./tos.css";
const Todoitem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item-container">
      <div className="todo-card">
        <div className="card-header">
          <span className="todo-number">#{todo.sno}</span>
          <h5 className="todo-title">{todo.title}</h5>
        </div>
        <div className="card-body">
          <p className="todo-desc">{todo.desc}</p>
        </div>
        <div className="card-footer">
          <button
            className="delete-btn"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
