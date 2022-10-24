import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Blog.css";
import { ThemeContext } from "../../contexts/ThemeContext";

import SingleBlog from "./SingleBlog/SingleBlog";
import { read } from "feed-reader";

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
  //https://proxy1900.herokuapp.com/
  //"https://proxy.cors.sh/
  const [rssUrl] = useState("https://proxy1900.herokuapp.com/http://feeds.feedburner.com/appdevelopermagazine");
  const [items, setItems] = useState([]);


  useEffect(() => {
    const getRss = async (e) => {

      read(rssUrl, {
        useISODateFormat: false,
        normalization: true,
        getExtraEntryFields: (feedEntry) => {
          const mediaContent =  feedEntry["media:content"];
          const guid = feedEntry["guid"];
          const uid =  guid.substring(0, guid.length - 1); 
          const refinedId =  uid.substring(uid.lastIndexOf('/') + 1, uid.length - 1)
         
          return {
            image:  mediaContent["@_url"],
            id: refinedId,
          }
        },

      }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'mode':"no-cors"
        }, 
        mode : 'no-cors',
      }).then(result =>{
              setItems(result.entries);
           //  console.log(result.entries);
            }); 
          };
      
          getRss();
          
        }, [rssUrl]);      



  return (
    <>
      {items.length > 0 && (
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
                  
                  return  <SingleBlog
                  theme={theme}
                  title={item.title}
                  desc={item.description}
                  date={item.date}
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
                                <Link to="/blog">
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

export default Blog;
