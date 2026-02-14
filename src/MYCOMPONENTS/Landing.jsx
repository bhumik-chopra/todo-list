import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container text-center mt-5">
      <div className="p-5 rounded-4 shadow-lg bg-light">
        <h1 className="display-4 text-dark mb-3">Welcome</h1>
        <p className="lead mb-4">
          Welcome to the Todo List app — organize tasks, stay productive, and
          get things done. Built with care.
        </p>
        <div>
          <Link className="btn btn-primary me-2" to="/home">
            Go to Home
          </Link>
          <Link className="btn btn-outline-secondary" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
