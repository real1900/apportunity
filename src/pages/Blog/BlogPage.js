import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import "./BlogPage.css";
import { Contacts, Footer, SingleBlog } from "../../components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { HiArrowLeft } from "react-icons/hi";
import { EventEmitter } from "../../utils/events";
import { fetchBlog } from "../../utils/blogFetcher";

function BlogPage() {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    search: {
      color: theme.tertiary,
      width: "40%",
      height: "2.75rem",
      outline: "none",
      border: "none",
      borderRadius: "20px",
      padding: "0.95rem 1rem",
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      backgroundColor: theme.secondary,
      boxShadow:
        theme.type === "dark"
          ? "inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060"
          : "inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030",
      "&::placeholder": {
        color: theme.tertiary80,
      },
      [t.breakpoints.down("sm")]: {
        width: "350px",
      },
    },
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
  }));

  const classes = useStyles();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  useEffect(() => {
    const getRss = async (e) => {
      const blogٰItems = await fetchBlog();
      setItems(blogٰItems);
    };

    getRss();

  }, []);


  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Blog</title>
      </Helmet>
      <div
        className="blogPage--header"
        style={{ backgroundColor: theme.primary }}
      >
        <button
          className={classes.homeContainer}
          onClick={() => {
            EventEmitter.dispatch(
              "routeChange",
              EventEmitter.animation.backward
            );
            navigate(-1);
          }}
        >
          <HiArrowLeft className={classes.home} />
        </button>
        <h1 style={{ color: theme.secondary }}>Blogs</h1>
      </div>
      <div className="blogPage--container">
        <div className="blog--search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Seach blog..."
            className={classes.search}
          />
        </div>
        <div className="blogs--container">
          <Grid
            className="blog-grid"
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {items.map((item) => {
              const url = item.link._text
              const formattedURL = url.slice(0, -1)
              const lastPath = formattedURL.substring(formattedURL.lastIndexOf('/') + 1)

              return <SingleBlog
                theme={theme}
                title={item.title._text}
                desc={item.description._text}
                date={item.pubDate._text}
                image={item['media:content']._attributes.url}
                url={item.link._text}
                key={lastPath}
                id={lastPath}
              />;
            }
            )}
          </Grid>
        </div>
      </div>
      <Contacts />
      <Footer />
    </div>
  );
};

export default BlogPage;
