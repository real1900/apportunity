import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Clients.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { clientsData, clientsDescriptionData } from '../../data/clientsData'
import { clientsImage } from '../../utils/clientsImage'

function Clients() {

    const { theme } = useContext(ThemeContext);

    const clientBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    const clientsImageStyle = {
        width: '120px'
    }

    return (
        <div className="clients" style={{backgroundColor: theme.secondary}}>
            <div className="clientsHeader">
                <h2 style={{color: theme.primary}}>Clients</h2>
             
            </div>
            <div className="clientsDescription">
                <h4 style={{color:theme.tertiary80}}>{clientsDescriptionData}</h4></div>
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
                    >
                        {clientsData.map((client, id) => (
                            <div className="client--box" key={id} style={clientBoxStyle}>
                                <img src={clientsImage(client)} alt={client}  style={clientsImageStyle}/>
                                <h6 style={{color: theme.tertiary}}>
                                    {client}
                                </h6>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Clients
