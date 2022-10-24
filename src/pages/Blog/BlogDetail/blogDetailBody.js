import React, { useState, useEffect, useContext, } from "react";
import { useParams } from "react-router";
import './blogDetailBody.css';
import parse from 'html-react-parser';
import { ThemeContext } from "../../../contexts/ThemeContext";

function BlogDetailBody({ guid, url }) {

    const { id } = useParams();
    const [contents, setContents] = useState();
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        fetch(url).then((resp) => { return resp.text() }).then((text) => {
            const textWithRelativeURL = text.replace('src="', 'src="https://appdevelopermagazine.com');
            const parser = new DOMParser();
            const document = parser.parseFromString(textWithRelativeURL, "text/html");
            var object = document.getElementsByClassName("typography-sub-content-wrapper");
            var elements = parse(object[0].innerHTML.replace('src="', 'src="https://appdevelopermagazine.com'));//console.log(elements); 
            setContents(elements);
        })
    }, [id, url]);


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
