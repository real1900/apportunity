import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import BlogDetailBody from "./blogDetailBody";
import { fetchBlog } from "../../../utils/blogFetcher";
import PageDetail from "../../../components/PageDetail";
import './blogDetail.css';
import { convertUnixDateToDateTime } from "../../../utils/date";

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
        const theURL = v.link;
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

  const theImage = blogItem.media

  var body = <></>

  if (theImage) {
    const header = <div className="blog-detail--header">
      <h1>{blogItem.title}</h1>
      <h5>{convertUnixDateToDateTime(blogItem.published)}</h5>
    </div>
    const content = blogItem.content.replace("<![CDATA[", "").replace("]]>", "");

    console.log("content IS", content)
    // console.log("blogItem IS", blogItem)
    const blogDetailBody = <BlogDetailBody content={content} />

    // console.log("blogItem content IS", image)
    body = <PageDetail image={blogItem.media.content.url} header={header} body={blogDetailBody} shouldContainImage={false}></PageDetail>

  }

  return body

}

export default BlogDetail;
