import React from "react";
import { useParams } from "react-router";
import { projectsData } from "../../../data/projectsData";
import MarkDownReader from "../../../components/MarkDownReader";
import PageDetail from "../../../components/PageDetail";
import GetStoreLink from "../../../components/common/getStoreLink";
import './projectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const _filterArr = projectsData.filter((v, i) => v.id === parseInt(id));
  const data = _filterArr.length > 0 ? _filterArr[0] : {};

  const image = require(`../../../assets/png/projects/${id}.png`);
  const markDownFile = require("../../../data/markDown/1.md");
  const body = <MarkDownReader markDownFile={markDownFile} />
  const storeLinks = data.storeLinks

  const header = <div className="project--header">
    <h1>{data.projectName}</h1>
    <h5>{data.projectDesc}</h5>

    <div className="project--showcaseBtn">
      {
        Object.keys(storeLinks).map((key, index) => (
          GetStoreLink(key, storeLinks[key], 32, data.enterpriseApp)
        ))
      }
    </div>

  </div>

  return (
    <PageDetail image={image} header={header} body={body} shouldContainImage={true}></PageDetail>
  );
}

export default ProjectDetail;
