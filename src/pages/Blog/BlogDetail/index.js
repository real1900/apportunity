import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { HiArrowLeft } from "react-icons/hi";
import { EventEmitter } from "../../../utils/events";
import Transitions from "../../Transitions";
import { useNavigate } from "react-router-dom";
import BlogDetailBody from "./blogDetailBody";
import { Contacts } from "../../../components";
import { fetchBlog } from "../../../utils/blogFetcher";
import "./blogDetail.css";

function BlogDetail() {

  const { theme, drawerOpen } = useContext(ThemeContext);
  const location = useLocation();

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
  const navigate = useNavigate();
  //"https://proxy.cors.sh/
  const [blogItem, setBlogItem] = useState([]);
  useEffect(() => {

    let lastPath = location.pathname.split("/").pop()
    const getRss = async (e) => {
      const blogٰItems = await fetchBlog();
      const _filterArr = blogٰItems.filter((v, i) => v.id === lastPath);
      var item = _filterArr.length > 0 ? _filterArr[0] : {};
      setBlogItem(item)
    };

    getRss();

  }, [location.pathname]);

  return (
    <Transitions>
      <div className="blog-detail" style={{ backgroundColor: theme.primary }}>
        <div className="blog-detail--container">

          <div
            className="blog-detail--container-left"
            style={{ backgroundColor: theme.primary }}
          >
            <div className='home' onClick={() => {
              EventEmitter.dispatch(
                "routeChange",
                EventEmitter.animation.backward
              );
              navigate(-1);
            }}>
              <HiArrowLeft className={classes.home} />
            </div>
          </div>

          <img
            src={blogItem.image}
            alt=""
            className="blog-detail--img"
            style={{
              opacity: `${drawerOpen ? "0" : "1"}`,
              borderColor: theme.secondary,
            }}
          />
          <div
            className="blog-detail--container-right"
            style={{ backgroundColor: theme.secondary }}
          >
            <div className="lcr--content" style={{ color: theme.tertiary }}>
              <h1>{blogItem.title}</h1>
              <p>{blogItem.published}</p>
            </div>
          </div>
        </div>
      </div>
      <BlogDetailBody {...blogItem.id}/>
      <Contacts/>
    </Transitions>
  );
}

export default BlogDetail;
