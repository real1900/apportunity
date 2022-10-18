import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { servicesData, serviceIntro } from "../../data/servicesData";
import { Fade } from "react-reveal";
import "./Services.css";
import "../Achievement/Achievement.css";
import AchievementCard from "../Achievement/AchievementCard";

import serviceImage from '../../assets/png/services/services.png'

function Services() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {servicesData.length > 0 && (
        <div
          className="achievement"
          id="services"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="achievement-body">
            <h1 style={{ color: theme.primary }}>Our Services</h1>
            <p style={{ color: theme.tertiary80 }}>
              {serviceIntro.description1}
            </p>
            <br />
            <br />
            <p style={{ color: theme.tertiary80 }}>
              {serviceIntro.description2}
            </p>
            <Fade bottom>
                        <div className="services-image">
                            <img
                                src={serviceImage}
                                alt="Our Expertise"
                            />
                        </div>
                    </Fade>
          </div>
          <div className="achievement-cards">
            {servicesData.map((services) => (
              <AchievementCard
                key={services.id}
                id={services.id}
                title={services.title}
                desc={services?.desc}
                image={services.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
