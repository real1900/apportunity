import React from "react";
import Fade from "react-reveal/Fade";
// import { Link } from "react-router-dom";
import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";
import GetStoreLink from "../../common/getStoreLink";

function SingleProject({
  id,
  name,
  companyName,
  desc,
  theme,
  onClick,
  storeLinks,
  enterpriseApp
}) {

  const imgStyle = {
    // opacity: 0.5
  }

  const image = require(`../../../assets/png/projects/${id}.png`);

  return (
    <button
      style={{ backgroundColor: "transparent", border: "none" }}
      onClick={onClick}
    >
      <Fade bottom>
        <div
          key={id}
          className="singleProject"
          style={{ backgroundColor: theme.primary400 }}
        >
          <div className="projectContent">
            <h2
              id={name.replace(" ", "-").toLowerCase()}
              style={{ color: theme.secondary }}
            >
              {name}
            </h2>

            <h3
              id={name.replace(" ", "-").toLowerCase()}
              style={{ color: theme.tertiary }}
            >
              {companyName}
            </h3>
            <div className="project--showcaseBtn">
              {
                Object.keys(storeLinks).map((key, index) => (

                  GetStoreLink(key, storeLinks[key], 32, enterpriseApp)
                ))
              }
            </div>
            <img className="grayScale" src={image ? image : placeholder} style={imgStyle} alt={name} />

          </div>
          <p
            className="project--desc"
            style={{
              background: theme.secondary,
              color: theme.tertiary,
            }}
          >
            {desc}
          </p>
          {/* <div
            className="project--lang"
            style={{
              background: theme.secondary,
              color: theme.tertiary80,
            }}
          >
            {tags.map((id) => (
              <span key={id}>{id}</span>
            ))}
          </div> */}

        </div>
      </Fade>
    </button>
  );
}

export default SingleProject;
