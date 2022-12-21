import React, { useState, useEffect, useContext, } from "react";
import { useParams } from "react-router";
import './blogDetailBody.css';
import parse from 'html-react-parser';
import { ThemeContext } from "../../../contexts/ThemeContext";

function BlogDetailBody({ content }) {

    const [contents, setContents] = useState();
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        var elements = parse(content.replace(/\n.*$/, '')); //remove last line
        setContents(elements);
    }, [content]);

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