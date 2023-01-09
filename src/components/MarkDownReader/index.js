import React, { useState, useEffect, useContext } from "react";
import './markdown.css';
import Markdown from 'markdown-to-jsx';
import { ThemeContext } from "../../contexts/ThemeContext";
import Seperator from "../common/Separator";

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
            <Seperator backgroundColor={theme.primary} opacity={1} paddingTop={'0px'} paddingBottom={'0px'}></Seperator>
            <Markdown>{markdown}</Markdown>;
        </div>
    );
}

export default MarkDownReader;
