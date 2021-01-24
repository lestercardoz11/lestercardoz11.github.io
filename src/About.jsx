import React from "react";
import "./styles/App.css";
import linkedin from "./img/card/linkedin.png";
import github from "./img/card/github.png";
import instagram from "./img/card/instagram.png";

function About() {
  return (
    <main id="about-section">
      <div>
        <h1>About me</h1>
      </div>

      <div className="main-content">
        <div className="about-content1">
          <p>
            I’m an aspiring full stack developer. I love building web
            applications for various needs.
            <br />
            <br />
            While I work mostly with web development, I also enjoy getting
            involved with some form of machine learning. When I’m not coding,
            you’ll find me playing football or working out.
            <br />
            <br />I graduated from Symbiosis Institute of Technology, Pune. I've
            completed an internship in IMTAC, Muscat. And I've volunteered as a
            web developer for a Non-Governmental Organisation - Tribus, Pune.
          </p>
        </div>
        <div className="about-content2">
          <div className="card">
            <header></header>
            <div className="card-content">
              <a
                className="img-wrapper"
                href="https://www.linkedin.com/in/lestercardoz11/"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                className="img-wrapper"
                href="https://github.com/lestercardoz11"
              >
                <img src={github} alt="github" />
              </a>
              <a
                className="img-wrapper"
                href="https://www.instagram.com/lestercardoz11/"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
