import React, { useState, useEffect, useContext, } from "react";
import './blogDetailBody.css';
import parse from 'html-react-parser';
import { ThemeContext } from "../../../contexts/ThemeContext";
import Seperator from "../../../components/common/Separator";
import { Slide } from "react-reveal";

function BlogDetailBody({ content }) {

    const [contents, setContents] = useState();
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        var elements = parse(content.replace(/\n.*$/, '')); //remove last line
        setContents(elements);
    }, [content]);

    return (
        <div className="blogDetailBody"  >
            <Slide left> 
            <Seperator backgroundColor={theme.primary} opacity={1} paddingTop={'0px'} paddingBottom={'0px'}></Seperator>
                </Slide> 
           <Slide bottom>
             <div>{contents}</div>
             </Slide>

        </div>
    );
}
export default BlogDetailBody;