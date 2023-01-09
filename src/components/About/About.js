import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'

import suleman from '../../assets/png/about/suleman.jpg'
import YoutubeEmbed from '../YoutubeEmbed/youtubeEmbed';
import Seperator from '../common/Separator';

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <Seperator backgroundColor={theme.primary} opacity={1} paddingTop={'0px'} paddingBottom={'0px'}></Seperator>
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
            <Seperator backgroundColor={theme.tertiary80} opacity={0.2} paddingTop={'100px'} paddingBottom={'60px'}></Seperator>
            <YoutubeEmbed embedId="J03dRpngTPY" />
        </div>

    )
}

export default About
