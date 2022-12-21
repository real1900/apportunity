import React from 'react'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png'
import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {

    function getDate(unixTimeStamp) {
        var date = new Date(unixTimeStamp).toLocaleDateString()
        var time = new Date(unixTimeStamp).toLocaleTimeString()
        return date + " " + time
    }

    function truncateWords(sentence, amount, tail) {
        const words = sentence.split(' ');

        if (amount >= words.length) {
            return sentence;
        }

        const truncated = words.slice(0, amount);
        return `${truncated.join(' ')}${tail}`;
    }

    const shortDesc = truncateWords(desc, 19, '...')
    const shortDescString = shortDesc.replace(/<[^>]*>/g, '')


    return (
        <Fade bottom>
            <Link to={`/blog/${id}`}
                state={{
                    fromHome: true
                }}
            >
                <div className="singleBlog" key={id} style={{ backgroundColor: theme.primary400 }}>
                    <div className="singleBlog--image" style={{ backgroundColor: theme.color }}>
                        <img
                            src={image ? image : placeholder}
                            alt={title}
                        />
                    </div>
                    <div className="singleBlog--body">
                        <p style={{ color: theme.tertiary }}>{getDate(date)}</p>
                        <h3 style={{ color: theme.secondary }}>{title}</h3>
                        <h6 style={{ color: theme.secondary }}>{shortDescString}</h6>
                    </div>
                </div>
            </Link>
        </Fade>
    )
}

export default SingleBlog
