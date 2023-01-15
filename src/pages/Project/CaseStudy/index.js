import React, {
    useContext, useLayoutEffect, useState
} from "react";
import './caseStudy.css';
import { ThemeContext } from "../../../contexts/ThemeContext";
import { projectsData } from '../../../data/projectsData'
import { clients } from '../../../data/clientsData'
import { caseStudyData } from '../../../data/caseStudyData'
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

    const webpDir = require.context('../../../assets/webp/caseStudies');

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

    const image1 = webpDir(`./${project.id}/1.webp`);
    const image2 = webpDir(`./${project.id}/2.webp`);
    const image3 = webpDir(`./${project.id}/3.webp`);
    const image4 = webpDir(`./${project.id}/4.webp`);

    function getImageClassName({ isInvert }) {
        var className = null;
        if (project.enterpriseApp === false) {
            if (isInvert === true) {
                className = "caseStudy-phone-image--invert"
            } else {
                className = "caseStudy-phone-image"
            }
        } else {
            className = null;
        }
        return className;
    }

    const [matches, setMatches] = useState(false);
    useLayoutEffect(() => {

        const mediaQuery = window.matchMedia('(max-width: 992px)');
        setMatches(mediaQuery.matches);

        function handleTabletChange(e) {
            // Check if the media query is true
            if (e.matches) {
                // Then log the following message to the console
                console.log('Media Query Matched!')

            }
            setMatches(e.matches);
        }



        mediaQuery.addListener(handleTabletChange);

    }, []);









    return (
        <div className="caseStudy"  >



            <div style={{
                backgroundColor: theme.primary,
                flexDirection: project.enterpriseApp || matches ? "column-reverse" : "row"
            }} className="caseStudy-body" >


                {showClient &&
                    <div className="caseStudy-column-text">
                        <Slide left>
                            <h2 style={{ color: theme.secondary }}>About {clientName}</h2>
                        </Slide>
                        <Slide right>
                            <img style={clientImageStyle} src={svgDir(`./${client.name.toLowerCase()}.svg`)} alt={client.name} />

                        </Slide>
                        <Slide right>
                            <p style={{ color: theme.secondary }}>{client.aboutCompany}</p>
                        </Slide>

                    </div>
                }
                {!showClient && project.aboutCompany &&
                    <div className="caseStudy-column-text">
                        <h2 style={{ color: theme.secondary }}>About {clientName}</h2>
                        <Slide right>    <p style={{ color: theme.secondary }} >{project.aboutCompany}</p>
                        </Slide>

                    </div>
                }   <Slide right>
                    <div className="caseStudy-column-image">

                        <img
                            src={image1}
                            className={getImageClassName(false)}
                            alt={`Case study for ${caseID}`}
                            style={{ objectFit: "cover", }}
                        />

                    </div>
                </Slide>
            </div>


            <div
                style={{ flexDirection: project.enterpriseApp || matches ? "column-reverse" : "row" }}
                className="caseStudy-body">
                <Slide right>
                    <div className="caseStudy-column-image">

                        <img
                            src={image2}
                            className={getImageClassName(true)}
                            alt={`Case study for ${caseID}`}
                            style={{
                                objectFit: "cover",
                            }}
                        />

                    </div>
                </Slide>

                <div className="caseStudy-column-text">
                    <Slide bottom>
                        <h2 style={{ color: theme.primary }}>Challenge</h2>
                    </Slide>
                    {caseStudy.challenge.map((currElement, index) => {
                        return <Slide bottom>
                            <p>{currElement}</p> </Slide>; //equivalent to list[index]
                    })
                    }
                </div>
            </div>

            <div
                style={{
                    backgroundColor: theme.primary,
                    flexDirection: project.enterpriseApp || matches ? "column-reverse" : "row"
                }}
                className="caseStudy-body" >

                <div className="caseStudy-column-text">
                    <Slide bottom>
                        <h2 style={{ color: theme.secondary }}>Solution</h2>
                    </Slide>
                    {caseStudy.solution.map((currElement, index) => {
                        return <Slide bottom>
                            <p style={{ color: theme.secondary }}>{currElement}</p> </Slide>; //equivalent to list[index]
                    })
                    }
                </div>
                <Slide right>
                    <div className="caseStudy-column-image">

                        <img
                            src={image3}
                            className={getImageClassName(false)}
                            alt={`Case study for ${caseID}`}
                            style={{ objectFit: "cover", }}
                        />

                    </div>
                </Slide>
            </div>

            <div
                style={{ flexDirection: project.enterpriseApp || matches ? "column-reverse" : "row" }}
                className="caseStudy-body" >
                <Slide right>
                    <div className="caseStudy-column-image">

                        <img
                            src={image4}
                            alt={`Case study for ${caseID}`}
                            className={getImageClassName(true)}
                            style={{
                                objectFit: "cover",

                            }}
                        />

                    </div>
                </Slide>
                <div className="caseStudy-column-text">
                    <Slide bottom>
                        <h2 style={{ color: theme.primary }}>Result</h2>
                    </Slide>
                    {caseStudy.result.map((currElement, index) => {
                        return <Slide bottom>
                            <p>{currElement}</p>
                        </Slide>; //equivalent to list[index]
                    })
                    }
                </div>
            </div>
        </div>
    );


}

export default CaseStudy;
