import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
// import { Link } from "react-router-dom";
import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";
import GetOSIcon from "../../common/getOSIcon";

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

  const useStyles = makeStyles((t) => ({
    iconBtn: {
      color: theme.secondary,
      // border: `3px solid ${theme.secondary}`,
      padding: 15,
      width: 44,
      height: 44,
      borderRadius: "25%",
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
  }))

  const classes = useStyles();
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

                  <a
                    href={storeLinks[key]}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.iconBtn}
                    aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                      .replace(" ", "-")
                      .toLowerCase()}-demo`}
                  >
                    {
                      GetOSIcon(key)
                    }
                  </a>
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
