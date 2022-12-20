import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import BlogDetailBody from "./blogDetailBody";
import { fetchBlog } from "../../../utils/blogFetcher";
import PageDetail from "../../../components/PageDetail";

function BlogDetail() {
  const location = useLocation();
  const [blogItem, setBlogItem] = useState([]);

  useEffect(() => {
    let lastPath = location.pathname.split("/").pop()

    // console.log("lastPath is ", lastPath)
    // console.log("lastPath is ", lastPath)

    const getRss = async (e) => {
      const blogItems = await fetchBlog();
      const _filterArr = blogItems.filter((v, i) => {
        const theURL = v.guid._text;
        const formattedURL = theURL.slice(0, -1)
        const theLastCompo = formattedURL.substring(formattedURL.lastIndexOf('/') + 1)
        // console.log("theLastCompo Is", theLastCompo);
        return (theLastCompo === lastPath)
      });
      var item = _filterArr.length > 0 ? _filterArr[0] : {};
      // console.log("ITEM IS ", item)
      setBlogItem(item)
    };

    getRss();

  }, [location.pathname]);

  const theImage = blogItem['media:content']

  var body = <></>

  if (theImage) {
    const header = <div>
      <h1>{blogItem.title._text}</h1>
      <p>{blogItem.pubDate._text}</p>
    </div>
    const blogDetailBody = <BlogDetailBody {...blogItem.id} />
    // console.log("blogItem IS", blogItem)
    const image = blogItem['media:content']._attributes.url;
    // console.log("blogItem content IS", image)
    body = <PageDetail image={image} header={header} body={blogDetailBody} ></PageDetail>

  }

  return body

}

export default BlogDetail;
