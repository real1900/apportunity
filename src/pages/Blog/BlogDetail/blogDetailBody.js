import React, { useState, useEffect, useContext, } from "react";
import { useParams } from "react-router";
import './blogDetailBody.css';
import parse from 'html-react-parser';
import { ThemeContext } from "../../../contexts/ThemeContext";

function BlogDetailBody() {

    const { id } = useParams();
    const [contents, setContents] = useState();
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const blogURL = "https://appdevelopermagazine.com"
        const replaceText = `src="${blogURL}/`
        const url = `${blogURL}/${id}/`
       // console.log("URL SET ", url)
        fetch(url).then((resp) => { return resp.text() }).then((text) => {
            const parser = new DOMParser();
            const document = parser.parseFromString(text, "text/html");
            var object = document.getElementsByClassName("typography-sub-content-wrapper");
            var elements = parse(object[0].innerHTML.replace('src="', replaceText));
            // console.log("elements ", elements)
            setContents(elements);
        })

    }, [id]);


    return (
        <div className="blogDetailBody"  >
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div>{contents}</div>
        </div>
    );
}
export default BlogDetailBody;