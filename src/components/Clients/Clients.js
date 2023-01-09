import React, { useContext, useState, useRef } from 'react';
import Marquee from "react-fast-marquee";

import './Clients.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { clients } from '../../data/clientsData'
import { Button, } from '@material-ui/core';
import { Fade, Slide } from 'react-reveal';
import HoverElement from '../HoverElement/hoverElement';

function Clients() {

    const [show, setShow] = useState(false);
    const [clientID, setClientID] = useState(0);
    const [aboutCompany, setAboutCompany] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const target = useRef(null);

    const { theme } = useContext(ThemeContext);
    const clientBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.secondary}`
    }

    const svgDir = require.context('../../assets/svg/clients');

    return (
        <div className="clients" style={{ backgroundColor: theme.primary }}>
            <div className="clientsHeader">
                <h2 style={{ color: theme.secondary }}>Clients</h2>
            </div>
            <div className="clientsDescription">
                <p style={{ color: theme.secondary }}>{clients.description}</p></div>
            <div className="clientsContainer">
                <div className="client--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    ><Fade top >
                            {
                                clients.list.map(
                                    (client, id) => (
                                        <div key={id} className="client--name">
                                            <Button ref={target} onClick={() => selectClient(client, !show)} onMouseOver={() => selectClient(client, true)} >
                                                {/* <a href={client.website} rel="noreferrer" target="_blank" > */}
                                                <div className="client--box" key={id} style={clientBoxStyle}>
                                                    <img className={(client.id === 17 || client.id === 18) ? "clients-image-inverted" : "clients-image"} src={svgDir(`./${client.name.toLowerCase()}.svg`)} alt={client.name} />

                                                </div>
                                            </Button>
                                            {(client.id === clientID && show === true) && <div className='vertical-line'></div>}
                                            <h3 style={{ color: theme.tertiary }}>  {client.name}</h3>
                                            {(client.id === clientID && show === true) && <div className='vertical-line'></div>}
                                        </div>
                                    )
                                )
                            }
                        </Fade> </Marquee>
                    {show === true &&

                        <Slide top>
                            <div className='client-about-company'>
                                <h3 style={{ color: theme.tertiary }}>About {companyName}</h3>
                                <p>{aboutCompany}</p>
                                <HoverElement style={{ textAlign: 'right', }} target="_blank" text="More Information" href={companyWebsite}></HoverElement>
                            </div>
                        </Slide>
                    }
                </div>
            </div>
        </div >
    )

    function selectClient(client, isShown) {
        setClientID(client.id);
        setCompanyName(client.name);
        setAboutCompany(client.aboutCompany);
        setCompanyWebsite(client.website);

        if (client.id === clientID) {
            setShow(isShown);
        }
    }
}

export default Clients
