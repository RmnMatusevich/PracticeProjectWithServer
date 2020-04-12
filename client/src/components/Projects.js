import React from "react";
import Collage from "./Collage";
import Navigation from "./Navigation";
function Projects() {
  return (
    <React.Fragment>
      <Navigation />
      <section className="main-projects">
        <h3 className="main-projects__title">Main Projects</h3>
        <p className="main-projects__description">
          From configuration to security, web apps to big data—whatever the
          infrastructure needs of your application may be, there is a{" "}
          <b>Spring Project</b> to help you build it. Start small and use just
          what you need—<b>Spring is modular by design.</b>
        </p>

        <Collage />
      </section>
    </React.Fragment>
  );
}
export default Projects;
