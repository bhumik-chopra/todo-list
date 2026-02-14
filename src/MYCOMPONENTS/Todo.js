import React from "react";
import Todoitem from "./Todoitem";

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo-container">
      <div className="todo-list">
        {todo.length === 0 ? (
          <div className="no-todos">
            <h3>No Todos to display</h3>
            <p>Add some tasks to get started!</p>
          </div>
        ) : (
          todo.map((todoItem) => (
            <Todoitem key={todoItem.sno} todo={todoItem} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
