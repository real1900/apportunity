import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage, ProjectDetail } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";
import { AnimatePresence } from 'framer-motion';
import "./App.css";
import { EventEmitter } from "./utils/events";

const routes = ["/", "/blog", "/projects", "/project/:id"];

function AnimatedSwitch() {
  // const { state, pathname, hash } = location;
  // let currentScreen = 0;
  // if (pathname.includes("/project/")) {
  //   currentScreen = 1;
  // } else {
  //   currentScreen = routes.indexOf(pathname);
  // }

  // const previousScreen = state ? state.previousScreen : 0;
  // let animationClassNames =
  //   currentScreen > previousScreen ? "slide-forward" : "slide-backward";
  // if (hash) {
  //   animationClassNames = "";
  // }
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
        </Routes>
        </AnimatePresence >
  );
};

function App() {
  const { theme } = useContext(ThemeContext);

  // console.log(
  //   "%cDEVELOPER PORTFOLIO",
  //   `color:${theme.primary}; font-size:50px`
  // );
  // console.log(
  //   "%chttps://github.com/hhhrrrttt222111/developer-portfolio",
  //   `color:${theme.tertiary}; font-size:20px`
  // );
  // console.log = console.warn = console.error = () => {};

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
