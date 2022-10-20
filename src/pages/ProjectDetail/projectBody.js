import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './projectBody.css';
import Markdown from 'markdown-to-jsx';
function ProjectBody() {
 
const { id } = useParams();
const [markdown, setMarkdown] = useState("");

useEffect(() => {
  // const markDown = require(`../../data/markDown/${id}.md`);
   const markDown = require("../../data/markDown/1.md");

  fetch(markDown)
    .then((res) => res.text())
    .then((text) => setMarkdown(text));
}, [id]);



  return (
    <div className="markdown"  >
    <Markdown>{markdown}</Markdown>;
    </div>
  );
}

export default ProjectBody;
