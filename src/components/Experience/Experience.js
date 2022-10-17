import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';
import expimg from '../../assets/png/experience/expertise.png'

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (

        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}>
        <div className="line-styling">
          <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
          <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
          <div className="style-line" style={{backgroundColor: theme.primary}}></div>
          
        </div>
       
        <div className="experience-body">
       
            <div className="experience-description">
            <h2 style={{color: theme.primary}}>{experienceData.title}</h2>
                <p style={{color:theme.tertiary80}}>{experienceData.description}</p><br/><br/>
                {experienceData.types.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            icon = {exp.icon}
                            company={exp.company}/>
                    ))}
            </div>
            <div className="experience-image">
                <img 
                    src={expimg}  
                    alt="Suleman Imdad" 
                />
            </div>
            
        </div>
    
    </div>

        // <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
        //      <div className="experience-body">
                
        //          <div className="experience-description">
        //             <h1 style={{color:theme.primary}}>Expertise</h1>
        //             <div className="experience-details">
        //             <h4 style={{color:theme.tertiary80}}>we have experience</h4>
        //             <div className="experience-image">
        //              <img src={expimg} alt="" />
        //          </div>
        //             <br/><br/> </div>
        //             {experienceData.map(exp =>(
        //                 <ExperienceCard 
        //                     key={exp.id}
        //                     id={exp.id}
        //                     jobtitle={exp.jobtitle}
        //                     icon = {exp.icon}
        //                     company={exp.company}/>
        //             ))}
        //          </div>
        //      </div>
        // </div>
    )
}

export default Experience
