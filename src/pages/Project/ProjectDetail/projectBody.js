import React, { useState } from "react";
import { useParams } from "react-router";
import MarkDownReader from "../../../components/MarkDownReader";

function ProjectBody() {
 
const { id } = useParams();
const [markdown, setMarkdown] = useState("");


  const markDownFile = require("../../../data/markDown/1.md");
  return (
    <MarkDownReader markDownFile={markDownFile}/>
  );
}

export default ProjectBody;
