import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Main, BlogPage, ProjectPage, ProjectDetail } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";
import { AnimatePresence } from 'framer-motion';
import "./App.css";
import { EventEmitter } from "./utils/events";
import BlogDetail from "./pages/Blog/BlogDetail";

function AnimatedSwitch() {
  const [animationClassNames, setAnimationClassNames] = useState("");

  useEffect(() => {
    EventEmitter.subscribe("routeChange", (className) =>
      setAnimationClassNames(className)
    );
  }, [animationClassNames]);

  return (
    <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" exact element={<Main />} /> 
          <Route path="/blog" exact element={<BlogPage />} />
          <Route path="/projects" exact element={<ProjectPage />} />
          <Route path="/project/:id" exact element={<ProjectDetail />} />
          <Route path="/blog/:id" exact element={<BlogDetail />} />
        </Routes>
        </AnimatePresence >
  );
};

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <AnimatedSwitch />
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
