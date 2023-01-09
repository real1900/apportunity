import React, {
    useContext
} from "react";
import './caseStudy.css';
import { ThemeContext } from "../../../contexts/ThemeContext";
import { projectsData } from '../../../data/projectsData'
import { caseStudyData } from '../../../data/caseStudyData'
import Seperator from "../../../components/common/Separator";
import { Slide } from "react-reveal";

function CaseStudy({ caseID, image }) {
    const { theme } = useContext(ThemeContext);


    const caseStudy = caseStudyData[caseID - 1];
    const project = projectsData[caseID - 1];

    return (
        <div className="caseStudy"  >
            <Slide left>
                <Seperator backgroundColor={theme.primary} opacity={1} paddingTop={'0px'} paddingBottom={'0px'}></Seperator>
                {/* <img src={clientsImage(client.name)} alt={client.name} style={clientsImageStyle} /> */}

            </Slide>
            <Slide left>   <h2>About Company</h2>
            </Slide>
            <Slide right>    <p>{project.aboutCompany}</p>
            </Slide>
            <Slide right>      <img
                src={image}
                alt={`Case study for ${caseID}`}
                style={{ objectFit: "cover", }}
            />
            </Slide>

            <Seperator backgroundColor={theme.tertiary80} opacity={0.2} paddingTop={'100px'} paddingBottom={'60px'}></Seperator>

            <Slide left>    <h2>Challenge</h2>
            </Slide>
            <div>
                {caseStudy.challenge.map((currElement, index) => {
                    return <Slide bottom>
                        <p>{currElement}</p> </Slide>; //equivalent to list[index]
                })
                }
            </div>


            <Seperator backgroundColor={theme.tertiary80} opacity={0.2} paddingTop={'100px'} paddingBottom={'60px'}></Seperator>

            <Slide left>   <h2>Solution</h2>
            </Slide>
            <div>
                {caseStudy.solution.map((currElement, index) => {
                    return <Slide bottom>
                        <p>{currElement}</p> </Slide>; //equivalent to list[index]
                })
                }
            </div>
            <Slide right>
            </Slide>
            <Slide right>    <Seperator backgroundColor={theme.tertiary80} opacity={0.2} paddingTop={'100px'} paddingBottom={'60px'}></Seperator>
            </Slide>
            <Slide left>    <h2>Result</h2>
            </Slide>
            <div>
                {caseStudy.result.map((currElement, index) => {
                    return <Slide bottom>
                        <p>{currElement}</p> </Slide>; //equivalent to list[index]
                })
                }
            </div>
        </div>
    );


}

export default CaseStudy;
