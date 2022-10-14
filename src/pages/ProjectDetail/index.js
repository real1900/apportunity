import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import "../../components/Landing/Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { FaPlay, FaCode } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { EventEmitter } from "../../utils/events";
import Transitions from "../Transitions";
import { Link, useNavigate } from "react-router-dom";

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
      color: theme.secondary,
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      marginRight: 25,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
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
const  navigate = useNavigate();
  return (
    <Transitions>
    <div className="landing">
      <div className="landing--container">
      
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
          
        >
          <button className ='home' onClick={() => {
            EventEmitter.dispatch(
              "routeChange",
              EventEmitter.animation.backward
            );
              navigate(-1);
          }}>
                <HiArrowLeft className={classes.home}/>
                </button>
        </div>
        
        <img
          src={data.image}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
            backgroundColor: "#fff",
            objectFit: "contain",
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h1>{data.projectName}</h1>
            <p>{data.projectDesc}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 15,
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
            </div>
          </div>
        </div>
      </div>
    </div>
    </Transitions>
  );
}

export default ProjectDetail;
