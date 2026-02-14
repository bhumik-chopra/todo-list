import React from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import Footer from "./Footer";

export default function Home({ todolist, onDelete, onAdd }) {
  return (
    <div>
      <AddTodo onAdd={onAdd} />
      <Todo todo={todolist} onDelete={onDelete} />
      <Footer />
    </div>
  );
}
