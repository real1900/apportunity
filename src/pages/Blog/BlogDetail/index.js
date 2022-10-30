import React, {useState, useEffect } from "react";
import { useLocation } from "react-router";
import BlogDetailBody from "./blogDetailBody";
import { fetchBlog } from "../../../utils/blogFetcher";
import PageDetail from "../../../components/PageDetail";

function BlogDetail() {
  const location = useLocation();
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

  const header = <div>
    <h1>{blogItem.title}</h1>
    <p>{blogItem.published}</p>
  </div>
  const body = <BlogDetailBody {...blogItem.id} />
  const image = blogItem.image
  return (
    <PageDetail image={image} header={header} body={body} ></PageDetail>
  );
}



export default BlogDetail;
