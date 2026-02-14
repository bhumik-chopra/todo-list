import logo from "./logo.svg";
import "./App.css";
import HEADER from "./MYCOMPONENTS/HEADER";
import Todo from "./MYCOMPONENTS/Todo";
import Footer from "./MYCOMPONENTS/Footer";
import AddTodo from "./MYCOMPONENTS/AddTodo";
import Home from "./MYCOMPONENTS/Home";
import About from "./MYCOMPONENTS/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Initialize Vanta effect
    const initVanta = () => {
      if (
        window.VANTA &&
        window.THREE &&
        vantaRef.current &&
        !vantaEffect.current
      ) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a0a0a, // Dark background
          color1: 0x00ff88,
          color2: 0x0088ff,
          birdSize: 1.2,
          separation: 40.0,
          alignment: 50.0,
          cohesion: 40.0,
          quantity: 4.0,
        });
      }
    };

    // Load Three.js and Vanta.js
    const loadScript = (src, onLoad) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = onLoad;
      document.head.appendChild(script);
    };

    // Check and load scripts
    if (!window.THREE) {
      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js",
        () => {
          if (!window.VANTA) {
            loadScript(
              "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js",
              () => {
                // Give some time for Vanta to initialize
                setTimeout(initVanta, 500);
              },
            );
          } else {
            setTimeout(initVanta, 500);
          }
        },
      );
    } else if (!window.VANTA) {
      loadScript(
        "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js",
        () => {
          setTimeout(initVanta, 500);
        },
      );
    } else {
      setTimeout(initVanta, 500);
    }

    // Hide scrollbar
    document.body.style.overflow = "hidden";

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      // Restore scrollbar on cleanup
      document.body.style.overflow = "auto";
    };
  }, []);

  const [todolist, settodo] = useState([
  ]);
  const [search, setSearch] = useState("");

  const onDelete = (todo) => {
    settodo(
      todolist.filter((e) => {
        return e !== todo;
      }),
    );
  };

  const onAdd = (todo) => {
    const newTodo = {
      ...todo,
      sno:
        todolist.length > 0 ? Math.max(...todolist.map((t) => t.sno)) + 1 : 1,
    };
    settodo([...todolist, newTodo]);
  };

  const filteredTodos = todolist.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div ref={vantaRef} className="app-full-vanta">
      {/* Overlay to ensure content is readable */}
      <div className="content-wrapper">
        <Router>
          <HEADER
            title="TO DO LIST"
            search="true"
            searchValue={search}
            onSearchChange={setSearch}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  todolist={filteredTodos}
                  onDelete={onDelete}
                  onAdd={onAdd}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
