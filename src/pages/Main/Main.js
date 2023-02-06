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
  Pricing,
  // Achievement,
} from "../../components";
import Video from "../../components/Video/Video";
import { headerData } from "../../data/headerData";
import { appInDebugMode } from "../../utils";

function Main() {
  return (
    <Transition timeout={200} >
      <div>
        <Helmet>
          <title>{headerData.name}.io</title>
        </Helmet>
        <Navbar />
        <Video />
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
