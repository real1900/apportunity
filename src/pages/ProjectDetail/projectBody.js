import React, { useState, useEffect , useContext} from "react";
import { useParams } from "react-router";
import './projectBody.css';
import Markdown from 'markdown-to-jsx';

import { ThemeContext } from "../../contexts/ThemeContext";

function ProjectBody() {
 
const { id } = useParams();
const [markdown, setMarkdown] = useState("");
const { theme } = useContext(ThemeContext);

useEffect(() => {
  // const markDown = require(`../../data/markDown/${id}.md`);
   const markDown = require("../../data/markDown/1.md");

  fetch(markDown)
    .then((res) => res.text())
    .then((text) => setMarkdown(text));
}, [id]);



  return (
    <div className="markdown"  >
       <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
    <Markdown>{markdown}</Markdown>;
    </div>
  );
}

export default ProjectBody;
