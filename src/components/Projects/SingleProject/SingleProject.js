import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

function SingleProject({
  id,
  name,
  companyName,
  desc,
  theme,
  onClick,
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

            <img className="grayScale" src={image ? image : placeholder} style={imgStyle} alt={name} />
            <div className="project--showcaseBtn">
              {/* <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
                aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                  .replace(" ", "-")
                  .toLowerCase()}-demo`}
              >
                <FaPlay
                  id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                  className={classes.icon}
                  aria-label="Demo"
                />
              </a> */}

              {/* <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
                aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                  .replace(" ", "-")
                  .toLowerCase()}-code`}
              >
                <FaCode
                  id={`${name.replace(" ", "-").toLowerCase()}-code`}
                  className={classes.icon}
                  aria-label="Code"
                />
              </a> */}
            </div>
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
