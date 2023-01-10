import React, {
    useContext
} from "react";
import './caseStudy.css';
import { ThemeContext } from "../../../contexts/ThemeContext";
import { projectsData } from '../../../data/projectsData'
import { clients } from '../../../data/clientsData'
import { caseStudyData } from '../../../data/caseStudyData'
import Seperator from "../../../components/common/Separator";
import { Slide } from "react-reveal";

function CaseStudy({ caseID, image }) {
    const { theme } = useContext(ThemeContext);

    var showClient = false;
    const caseStudy = caseStudyData[caseID - 1];
    const project = projectsData[caseID - 1];
    var client = null;
    var clientName = "";
    if (project.companyID !== 0) {
        const _filteredClients = clients.list.filter((v, i) => v.id === parseInt(project.companyID));
        client = _filteredClients.length > 0 ? _filteredClients[0] : null;

        if (client !== null) {
            clientName = client.name
            showClient = true
        }

    }
    const svgDir = require.context('../../../assets/svg/clients');

    var clientImageStyle = {
        padding: '20px',
        maxWidth: '80%',
        width: '200px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        ...(client && (client.id === 17 || client.id === 18) &&
            { filter: 'invert(1)' })
    }



    return (
        <div className="caseStudy"  >
            <Slide left>
                <Seperator backgroundColor={theme.primary} opacity={1} paddingTop={'0px'} paddingBottom={'0px'}></Seperator> </Slide>

            <Slide left>   <h2>About {clientName}</h2>
            </Slide>
            {showClient &&
                <div>
                    <Slide right>
                        <img style={clientImageStyle} src={svgDir(`./${client.name.toLowerCase()}.svg`)} alt={client.name} />

                    </Slide>
                    <Slide right>    <p>{client.aboutCompany}</p>
                    </Slide>

                </div>
            }
            {!showClient && project.aboutCompany &&
                <div>

                    <Slide right>    <p>{project.aboutCompany}</p>
                    </Slide>

                </div>
            }
            <Slide right>
                <img
                    src={image}
                    alt={`Case study for ${caseID}`}
                    style={{ objectFit: "cover", }}
                />
            </Slide>

            <Seperator backgroundColor={theme.tertiary80} opacity={0.2} paddingTop={'100px'} paddingBottom={'60px'}></Seperator>

            <Slide bottom>    <h2 style={{ color: theme.primary }}>Challenge</h2>
            </Slide>
            <div>
                {caseStudy.challenge.map((currElement, index) => {
                    return <Slide bottom>
                        <p>{currElement}</p> </Slide>; //equivalent to list[index]
                })
                }
            </div>


            <Seperator backgroundColor={theme.tertiary80} opacity={0.2} paddingTop={'100px'} paddingBottom={'60px'}></Seperator>

            <Slide bottom>   <h2 style={{ color: theme.primary }}>Solution</h2>
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
            <Slide bottom>    <h2 style={{ color: theme.primary }}>Result</h2>
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
