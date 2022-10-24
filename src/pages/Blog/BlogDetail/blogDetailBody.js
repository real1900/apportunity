import React, { useState, useEffect , useContext} from "react";
import { useParams } from "react-router";
import './blogDetailBody.css';
import Markdown from 'markdown-to-jsx';

import { ThemeContext } from "../../../contexts/ThemeContext";

function BlogDetailBody({guid, url}) {
 
const { id } = useParams();
const [contents, setContents] = useState();
const { theme } = useContext(ThemeContext);

useEffect(() => {

  fetch(url).then((resp)=>{ return resp.text() }).then((text)=>
  { 

   

    var temp = document.createElement('div');
    temp.innerHTML = text;
    var htmlObject = temp.firstChild;
   var object =  htmlObject.getElementsByClassName("profile-inner-wrapper clearfix").html();
    
     // var elements = text.childNodes;
    // if (elements.item(0).childNodes.item(0).className === 'profile-inner-wrapper clearfix') {
    //   setContents(elements.item(0).childNodes.item(0).innerHTML);
    // }

    console.log(object);
    
    setContents(text);

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
  {/* <Markdown>{contents}</Markdown>; */}
  </div>
);
}


export default BlogDetailBody;
