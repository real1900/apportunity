import React, {
    useContext
} from "react";
import './caseStudy.css';
import { ThemeContext } from "../../../contexts/ThemeContext";
import { projectsData } from '../../../data/projectsData'
import { caseStudyData } from '../../../data/caseStudyData'
import Seperator from "../../../components/common/Separator";

function CaseStudy({ caseID, image }) {
    const { theme } = useContext(ThemeContext);


    const caseStudy = caseStudyData[caseID - 1];
    const project = projectsData[caseID - 1];

    return (
        <div className="caseStudy"  >
            <Seperator backgroundColor={theme.primary} opacity={1} paddingTop={'0px'} paddingBottom={'0px'}></Seperator>
            {/* <img src={clientsImage(client.name)} alt={client.name} style={clientsImageStyle} /> */}
            <h2>About Company</h2>
            <p>{project.aboutCompany}</p>
            <img
                src={image}
                alt={`Case study for ${caseID}`}
                style={{ objectFit: "cover", }}
            />
            <Seperator backgroundColor={theme.tertiary80} opacity={0.2} paddingTop={'100px'} paddingBottom={'60px'}></Seperator>
            <h2>Challenge</h2>
            <div>
                {caseStudy.challenge.map((currElement, index) => {
                    return <p>{currElement}</p>; //equivalent to list[index]
                })
                }
            </div>
            <Seperator backgroundColor={theme.tertiary80} opacity={0.2} paddingTop={'100px'} paddingBottom={'60px'}></Seperator>
            <h2>Solution</h2>
            <div>
                {caseStudy.solution.map((currElement, index) => {
                    return <p>{currElement}</p>; //equivalent to list[index]
                })
                }
            </div>
            <Seperator backgroundColor={ theme.tertiary80} opacity ={0.2} paddingTop ={'100px'} paddingBottom={'60px'}></Seperator>
            <h2>Result</h2>
            <div>
                {caseStudy.result.map((currElement, index) => {
                    return <p>{currElement}</p>; //equivalent to list[index]
                })
                }
            </div>

        </div>
    );

    
}

export default CaseStudy;
