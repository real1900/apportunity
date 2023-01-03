import React, { useEffect } from "react";
import {
  HashRouter as Router,
} from "react-router-dom";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";
import Messenger from "./components/Messenger";
import "./App.css";
import TagManager from 'react-gtm-module'
import AnimatedRoutes from "./AnimatedRoutes";

function App() {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-5QW5PZJ'
    }

    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <div className="app">
      <Router baseline="/">
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
      <Messenger />
      <BackToTop />
    </div>
  );
}

export default App;
