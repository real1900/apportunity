import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { HiArrowRight } from "react-icons/hi";
import SingleProject from "./SingleProject/SingleProject";
import { EventEmitter } from "../../utils/events";
import "./Projects.css";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 3).map((project) => (
                <Link key={project.id} to={`/project/${project.id}`}>

                  <SingleProject
                    onClick={() => {
                      EventEmitter.dispatch(
                        "routeChange",
                        EventEmitter.animation.forward
                      );

                    }}
                    key={project.id}
                    theme={theme}
                    id={project.id}
                    name={project.projectName}
                    desc={project.projectDesc}
                    image={project.image}
                  />
                </Link>
              ))}
            </div>

            {projectsData.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
