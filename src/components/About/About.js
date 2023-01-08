import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'

import suleman from '../../assets/png/about/suleman.jpg'
import YoutubeEmbed from '../YoutubeEmbed/youtubeEmbed';

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                    <p style={{ color: theme.tertiary80 }}>{aboutData.description1}<br /><br />{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img
                        src={suleman}
                        alt="Suleman Imdad"
                    />
                </div>
            </div>
            <div className="line-styling" style={{ paddingTop: '40px' }}>

                <div className="style-line" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
            </div>
            <YoutubeEmbed embedId="J03dRpngTPY" style={{ padding: '20px' }} />
        </div>

    )
}

export default About
