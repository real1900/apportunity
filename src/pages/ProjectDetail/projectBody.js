import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../components/Landing/Landing.css";
import Markdown from 'markdown-to-jsx';

function ProjectBody() {
 
const { id } = useParams();

const [markdown, setMarkdown] = useState("");

useEffect(() => {
  const markDown = require(`../../data/markDown/${id}.md`);

  fetch(markDown)
    .then((res) => res.text())
    .then((text) => setMarkdown(text));
}, [id]);



  return (
    <div style = {{backgroundColor: "red", maxHeight: 50 }} >
    <Markdown>{markdown}</Markdown>;
    </div>
  );
}

export default ProjectBody;
