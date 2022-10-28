import React from "react";
import { Helmet } from "react-helmet";
import { Transition } from "react-transition-group";

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
    <Transition>
      <div>
        <Helmet>
          <title>{headerData.name}.io</title>
        </Helmet>
        <Navbar />

        <Landing />
        <About />
        {/* <Education /> */}
        {/* <Skills /> */}
        <Experience />
        <Clients />
        <Services />
        <Projects />
        {/* <Achievement /> */}
        <Testimonials />
        <Blog />
        <Contacts />
        <Footer />
      </div>
    </Transition>
  );
}

export default Main;
