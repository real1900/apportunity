import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
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
import PrivacyPolicy from "./pages/Privacy";
import MessengerCustomerChat from 'react-messenger-customer-chat';


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
        <Route path="/blogs" exact element={<BlogPage />} />
        <Route path="/privacy" exact element={<PrivacyPolicy />} />
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
      <Router baseline="/">
        <ScrollToTop />
        <AnimatedSwitch />
      </Router>
      <MessengerCustomerChat
        pageId="118398932896752"
        appId="872759943882027"
      />
      <BackToTop />
    </div>
  );
}

export default App;
