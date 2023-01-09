import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Fade, Slide } from 'react-reveal';
import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';
import expimg from '../../assets/png/experience/expertise.png'
import './Experience.css';
import Seperator from '../common/Separator';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (

        <div className="experience" id="experience" style={{ backgroundColor: theme.secondary }}>
            <Slide left> 
            <Seperator backgroundColor={theme.primary} opacity={1} paddingTop={'0px'} paddingBottom={'0px'}></Seperator>
            </Slide>
            <div className="experience-description">
                <h2 style={{ color: theme.primary }}>{experienceData.title}</h2>

            </div>

            <div className="experience-body">


                <div className="experience-list">
                    {experienceData.types.map(exp => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            icon={exp.icon}
                            company={exp.company} />
                    ))}
                </div>

                <div className= "experience-column-left">

                    <p style={{ color: theme.tertiary80 }}>{experienceData.description}</p><br /><br />
                    <Fade bottom>
                        <div className="experience-image">
                            <img
                                src={expimg}
                                alt="Our Expertise"
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Experience
