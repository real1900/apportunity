import React from "react";
import { useParams } from "react-router";
import { projectsData } from "../../../data/projectsData";
import MarkDownReader from "../../../components/MarkDownReader";
import PageDetail from "../../../components/PageDetail";

function ProjectDetail() {
  const { id } = useParams();
  const _filterArr = projectsData.filter((v, i) => v.id === parseInt(id));
  const data = _filterArr.length > 0 ? _filterArr[0] : {};

  const image = require(`../../../assets/png/projects/${id}.png`);
  const markDownFile = require("../../../data/markDown/1.md");
  const body = <MarkDownReader markDownFile={markDownFile} />
  const header = <div>
    <h1>{data.projectName}</h1>
    <p>{data.projectDesc}</p>
    {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 15,
                paddingTop:20,
              }}
            >
              <a
                href={data.demo}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
              >
                <FaPlay className={classes.icon} aria-label="Demo" />
              </a>
              <a
                href={data.code}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
              >
                <FaCode className={classes.icon} aria-label="Code" />
              </a>
            </div> */}

  </div>

  return (
    <PageDetail image={image} header={header} body={body} ></PageDetail>
 );
}

export default ProjectDetail;
