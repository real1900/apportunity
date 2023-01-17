import React, { useEffect, useState } from "react";
import {
    Route,
    Routes
} from "react-router-dom";
import { Main, BlogPage, ProjectPage, ProjectDetail } from "./pages";
import { AnimatePresence } from 'framer-motion';
import { EventEmitter } from "./utils/events";
import BlogDetail from "./pages/Blog/BlogDetail";
import PrivacyPolicy from "./pages/Privacy";
import "./App.css";

function AnimatedRoutes() {
    const [animationClassNames, setAnimationClassNames] = useState("");

    useEffect(() => {
        EventEmitter.subscribe("routeChange", (className) =>
            setAnimationClassNames(className)
        );

    }, [animationClassNames]);

    return (
        <AnimatePresence mode='wait'>
            <Routes>
                <Route path="" exact element={<Main />} />
                <Route path="/blogs" exact element={<BlogPage />} />
                <Route path="/privacy" exact element={<PrivacyPolicy />} />
                <Route path="/projects" exact element={<ProjectPage />} />
                <Route path="/project/:id" exact element={<ProjectDetail />} />
                <Route path="/blog/:id" exact element={<BlogDetail />} />
            </Routes>
        </AnimatePresence >
    );
};

export default AnimatedRoutes;