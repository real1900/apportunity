import React, { useState, useEffect , useContext, useCallback} from "react";
import { useParams } from "react-router";
import './blogDetailBody.css';
import $ from 'jquery';

import Markdown from 'markdown-to-jsx';
import parse from 'html-react-parser';
import { ThemeContext } from "../../../contexts/ThemeContext";
function BlogDetailBody({guid, url}) {
 
const { id } = useParams();
const [contents, setContents] = useState();
const { theme } = useContext(ThemeContext);



useEffect(() => {

  fetch(url).then((resp)=>{ return resp.text() }).then((text)=>
  { 

    const parser = new DOMParser();
// convert html string into DOM
const document = parser.parseFromString(text, "text/html");
var object =  document.getElementsByClassName("typography-sub-content-wrapper");
var elements = parse(object[0].innerHTML);


  //console.log(elements); 
  setContents(elements);


//   var divs = elements.getElementsByTagName("div")[0];
// for (var i = 0; i < divs.length; i++) {
//     if (divs[i].className === 'profile-inner-wrapper clearfix') {
//       console.log(divs[i]);
//         // divs[i].style.backgroundColor = '#000';
//     }
// }

  // console.log(elements);
  
  //

    // const myText = text.querySelector("#content > div > div > section > div > div > div.col-xs-12.col-sm-8 > article > div > div.blog-inner-page > div.profile-inner-wrapper.clearfix” 
    // console.log(text) 
  })

    
}, [id, url]);



return (
  <div className="markdown"  >
     <div className="line-styling"> 
            <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
            <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
            <div className="style-line" style={{backgroundColor: theme.primary}}></div>
          </div>
          <div>{contents}</div>
  {/* <Markdown>{contents}</Markdown>; */}
  </div>
);
}


export default BlogDetailBody;