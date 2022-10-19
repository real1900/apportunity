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
        boxShadow: `0px 0px 30px ${theme.secondary}`
    }

    const clientsImageStyle = {
        width: '120px'
    }

    return (
        <div className="clients" style={{backgroundColor: theme.primary}}>
            <div className="clientsHeader">
                <h2 style={{color: theme.secondary}}>Clients</h2>
             
            </div>
            <div className="clientsDescription">
                <p style={{color:theme.secondary}}>{clientsDescriptionData}</p></div>
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
                            <div key={id} className="client--name">
                            <div className="client--box" key={id} style={clientBoxStyle}>
                                <img src={clientsImage(client)} alt={client}  style={clientsImageStyle}/>
                                
                            </div>
                            <h3 style={{color: theme.tertiary}}>  {client}</h3> 
                            </div>
                     
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Clients
