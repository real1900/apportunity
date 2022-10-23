import React from 'react'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png'
import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {

  const imgStyle = {
    opacity: 0.8
}
    return (
        <Fade bottom>
               <Link key={id} to ={`/blog/${id}`}>
            <div className="singleBlog" key={id} style={{backgroundColor: theme.primary400}}>
                <div className="singleBlog--image" style={{backgroundColor: theme.color}}>
                    <img 
                        style = {imgStyle}  
                        src={image ? image : placeholder} 
                        alt={title} 
                    />
                </div>
                <div className="singleBlog--body">
                    <p style={{color: theme.tertiary}}>{date}</p>
                    <h3 style={{color: theme.secondary}}>{title}</h3>
                    <h6 style={{color: theme.secondary}}>{desc}</h6>
                </div>
            </div>
            </Link>
        </Fade>
    )
}

export default SingleBlog
