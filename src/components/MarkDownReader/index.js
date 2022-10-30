import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import './markdown.css';
import Markdown from 'markdown-to-jsx';
import { ThemeContext } from "../../contexts/ThemeContext";

function MarkDownReader({ markDownFile }) {
    const [markdown, setMarkdown] = useState("");
    const { theme } = useContext(ThemeContext);

    useEffect(() => {

        fetch(markDownFile)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    });



    return (
        <div className="markdown"  >
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <Markdown>{markdown}</Markdown>;
        </div>
    );
}

export default MarkDownReader;
