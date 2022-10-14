import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  // Skills,
  Clients,
  Testimonials,
  Blog,
  // Education,
  Experience,
  Contacts,
  Projects,
  Services,
  // Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name}.io</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      {/* <Education /> */}
      {/* <Skills /> */}
     
      <Services />
      <Clients />
      <Experience />
      <Projects />
      {/* <Achievement /> */}
    
      <Testimonials />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
