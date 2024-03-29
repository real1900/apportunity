import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import {
  FaTwitter,
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";
import CalendarButton from "../CalendarButton";
import { Bounce } from "react-reveal";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="landing" id="home">

      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <Bounce left cascade>
            <div className="lcl--content">
              {socialsData.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                  <FaLinkedin
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="LinkedIn"
                  />
                </a>
              )}
              {socialsData.facebook && (
                <a href={socialsData.facebook} target="_blank" rel="noreferrer">
                  <FaFacebookSquare
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="Facebook"
                  />
                </a>
              )}
              {socialsData.github && (
                <a href={socialsData.github} target="_blank" rel="noreferrer">
                  <FaGithub
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="GitHub"
                  />
                </a>
              )}
              {socialsData.twitter && (
                <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="Twitter"
                  />
                </a>
              )}
              {socialsData.youtube && (
                <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                  <FaYoutube
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="YouTube"
                  />
                </a>
              )}
              {socialsData.blogger && (
                <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                  <FaBlogger
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="Blogger"
                  />
                </a>
              )}
            </div>
          </Bounce>
        </div>
        <Bounce bottom>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={headerData.image}
              alt=""
              className="landing--img"
              style={{
                opacity: `${drawerOpen ? "0" : "1"}`,
                borderColor: theme.secondary,
              }}
            />

          </div>
        </Bounce>
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <Bounce right cascade>
            <div className="lcr--content" style={{ color: theme.tertiary }}>
              <h6>{headerData.title}</h6>
              <h1>{headerData.name}</h1>
              <p>{headerData.desciption}</p>

              <div className="lcr-buttonContainer">

                <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                  <Button className={classes.resumeBtn}>Contact Us</Button>
                </NavLink>
                <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                  <CalendarButton title={"Request a quote"} />
                </NavLink>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default Landing;
