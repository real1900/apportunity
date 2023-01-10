import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'

import suleman from '../../assets/png/about/suleman.jpg'
import YoutubeEmbed from '../YoutubeEmbed/youtubeEmbed';
import Seperator from '../common/Separator';
import { Slide } from 'react-reveal';

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <Slide left>
                <Seperator backgroundColor={theme.primary} opacity={1} paddingTop={'0px'} paddingBottom={'0px'}></Seperator>
            </Slide>
            <div className="about-body">
                <Slide left>
                    <div className="about-description">
                        <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                        <p style={{ color: theme.tertiary80 }}>{aboutData.description1}<br /><br />{aboutData.description2}</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="about-img">
                        <img
                            src={suleman}
                            alt="Suleman Imdad"
                        />
                    </div>
                </Slide>
            </div>
            <Slide left>
                <Seperator backgroundColor={theme.tertiary80} opacity={0.2} paddingTop={'100px'} paddingBottom={'60px'}></Seperator>
            </Slide>
            <YoutubeEmbed embedId="J03dRpngTPY" />
        </div>

    )
}

export default About
