import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Blog.css";
import { ThemeContext } from "../../contexts/ThemeContext";

import SingleBlog from "./SingleBlog/SingleBlog";
import { fetchBlog } from "../../utils/blogFetcher";

function Blog() {

  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
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
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getRss = async (e) => {
      const blogٰItems = await fetchBlog();
      setItems(blogٰItems);
    };

    getRss();

  }, []);



  return (
    <>
      {(items !== undefined && items !== null)?
      (items.length > 0) && (
        <div
          className="blog"
          id="blog"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Blog</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {items
                .slice(0, 3)
                .reverse()
                .map((item) => {

                  return <SingleBlog
                    theme={theme}
                    title={item.title}
                    desc={item.description}
                    date={item.published}
                    image={item.image}
                    url={item.link}
                    key={item.id}
                    id={item.id}
                  />;
                }

                )}
            </div>

            {items.length > 3 && (
              <div className="blog--viewAll">
                <Link to="/blogs">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>):
      <div></div>}
    </>
  );
};

export default Blog;
