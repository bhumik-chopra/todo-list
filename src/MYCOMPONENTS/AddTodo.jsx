import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a todo title");
      return;
    }
    onAdd({
      title: title,
      desc: desc,
    });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container mt-4 mb-4">
      <h3 className="mb-3">Add New Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="todoTitle" className=" text-white bg-dark col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="todoTitle"
              placeholder="Enter todo title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="todoDesc" className="text-white bg-dark col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="todoDesc"
              placeholder="Enter todo description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
