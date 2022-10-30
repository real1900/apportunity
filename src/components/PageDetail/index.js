import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { FaPlay, FaCode } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./pageDetail.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { EventEmitter } from "../../utils/events";
import Transitions from "../../pages/Transitions";
import Contacts from "../Contacts/Contacts";

function PageDetail({image, header, body}) {
  const { theme, drawerOpen } = useContext(ThemeContext);

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

  return (
    <Transitions>
      <div className="page-detail" style={{ backgroundColor: theme.primary }}>
        <div className="page-detail--container">

          <div
            className="page-detail--container-left"
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
            className="page-detail--img"
            style={{
              opacity: `${drawerOpen ? "0" : "1"}`,
              borderColor: theme.secondary,
              backgroundColor: "#fff",
              objectFit: "contain",
            }}
          />
          <div
            className="page-detail--container-right"
            style={{ backgroundColor: theme.secondary }}
          >
            <div className="lcr--content">{header}</div>
          </div>
        </div>
      </div>
      {body}
      <Contacts />
    </Transitions>
  );
}

export default PageDetail;
