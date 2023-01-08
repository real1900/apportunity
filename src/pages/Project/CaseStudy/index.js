import React, {
    useContext
} from "react";
import './caseStudy.css';
import { ThemeContext } from "../../../contexts/ThemeContext";
import { projectsData } from '../../../data/projectsData'
import { caseStudyData } from '../../../data/caseStudyData'

function CaseStudy({ caseID, image }) {
    const { theme } = useContext(ThemeContext);


    const caseStudy = caseStudyData[caseID - 1];
    const project = projectsData[caseID - 1];

    return (
        <div className="caseStudy"  >
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            {/* <img src={clientsImage(client.name)} alt={client.name} style={clientsImageStyle} /> */}
            <h2>About Company</h2>
            <p>{project.aboutCompany}</p>
            <img
                src={image}
                alt={`Case study for ${caseID}`}
                style={{ objectFit: "cover", }}
            />
            <div className="line-styling" style={{ paddingTop: '100px', paddingBottom: '60px' }}>

                <div className="style-line" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
            </div>
            <h2>Challenge</h2>
            <div>
                {caseStudy.challenge.map((currElement, index) => {
                    return <p>{currElement}</p>; //equivalent to list[index]
                })
                }
            </div>
            <div className="line-styling" style={{ paddingTop: '100px', paddingBottom: '60px' }}>

                <div className="style-line" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
            </div>
            <h2>Solution</h2>
            <div>
                {caseStudy.solution.map((currElement, index) => {
                    return <p>{currElement}</p>; //equivalent to list[index]
                })
                }
            </div>
            <div className="line-styling" style={{ paddingTop: '100px', paddingBottom: '60px' }}>

                <div className="style-line" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.tertiary80, opacity: 0.2 }}></div>
            </div>
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
