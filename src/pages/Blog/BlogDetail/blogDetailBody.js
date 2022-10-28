import React, { useState, useEffect, useContext, } from "react";
import { useParams } from "react-router";
import './blogDetailBody.css';
import parse from 'html-react-parser';
import { ThemeContext } from "../../../contexts/ThemeContext";

function BlogDetailBody({ url, }) {

    const { id } = useParams();
    const [contents, setContents] = useState("<div></div>");
    const { theme } = useContext(ThemeContext);
    const blogURL = "https://appdevelopermagazine.com"
    const replaceText = `src="${blogURL}`

    if (url === undefined || url == null) {
       console.log("NO URL ")
        // url = `${blogURL}/${id}`
        // console.log(url)
    }


    useEffect(() => {

        if (url !== null){
            fetch(url).then((resp) => { return resp.text() }).then((text) => {
                // const textWithRelativeURL = text.replace('src="', replaceText);
                const parser = new DOMParser();
                const document = parser.parseFromString(text, "text/html");
                var object = document.getElementsByClassName("typography-sub-content-wrapper");
                var elements = parse(object[0].innerHTML.replace('src="', replaceText));//console.log(elements); 
                setContents(elements);
            })
        }
      
    }, [id, url, replaceText]);


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
