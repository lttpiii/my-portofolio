// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CVPage from "./pages/CVPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  // =========================
  // Scroll to top ONLY on page change
  // =========================
  useEffect(() => {
    const currentPath = location.pathname;
    const prevPath = prevPathRef.current;

    // Prevent conflict with hash scrolling
    if (currentPath !== prevPath && !location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    prevPathRef.current = currentPath;
  }, [location.pathname, location.hash]);

  // =========================
  // Handle hash scrolling
  // =========================
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const timer = setTimeout(() => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  // =========================
  // Theme handling
  // =========================
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
