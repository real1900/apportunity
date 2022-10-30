import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { projectsData } from "../../../data/projectsData";
// import { FaPlay, FaCode } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { EventEmitter } from "../../../utils/events";
import Transitions from "../../Transitions";
import { useNavigate } from "react-router-dom";
import { Contacts } from "../../../components";
import "./projectDetail.css";
import MarkDownReader from "../../../components/MarkDownReader";

function ProjectDetail() {
  const { theme, drawerOpen } = useContext(ThemeContext);
  const { id } = useParams();
  const _filterArr = projectsData.filter((v, i) => v.id === parseInt(id));
  const data = _filterArr.length > 0 ? _filterArr[0] : {};

  const useStyles = makeStyles((t) => ({
    homeContainer: {
      position: "absolute",
      top: 25,
      left: 25,
      backgroundColor: "transparent",
      border: "none",
    },
    home: {
      color: theme.tertiary,

      position: "absolute",
      top: 25,
      left: 25,
      padding: "7px",
      borderRadius: "50%",
      boxSizing: "content-box",
      fontSize: "2rem",
      cursor: "pointer",
      boxShadow:
        theme.type === "dark"
          ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
          : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: theme.tertiary,
        transform: "scale(1.1)",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
    iconBtn: {
      position: "absolute",
      color: theme.secondary,
      border: `3px solid ${theme.secondary}`,
      padding: 15,
      left: 20,
      top: 20,
      width: 80,
      height: 80,
      borderRadius: "20%",
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();
  const navigate = useNavigate();
  const image = require(`../../../assets/png/projects/${id}.png`);
  const markDownFile = require("../../../data/markDown/1.md");

  return (
    <Transitions>
      <div className="project-detail" style={{ backgroundColor: theme.primary }}>
        <div className="project-detail--container">

          <div
            className="project-detail--container-left"
            style={{ backgroundColor: theme.primary }}

          >
            <div onClick={() => {
              EventEmitter.dispatch(
                "routeChange",
                EventEmitter.animation.backward
              );
              navigate(-1);
            }}>
              <HiArrowLeft className={classes.iconBtn} />
            </div>
          </div>

          <img
            src={image}
            alt=""
            className="project-detail--img"
            style={{
              opacity: `${drawerOpen ? "0" : "1"}`,
              borderColor: theme.secondary,
              backgroundColor: "#fff",
              objectFit: "contain",
            }}
          />
          <div
            className="project-detail--container-right"
            style={{ backgroundColor: theme.secondary }}
          >
            <div className="lcr--content" style={{ color: theme.tertiary }}>
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
          </div>
        </div>
      </div>
      <MarkDownReader markDownFile={markDownFile} />
      <Contacts />
    </Transitions>
  );
}

export default ProjectDetail;
