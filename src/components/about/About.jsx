import "./About.css";
import AboutImage from "../image/profile.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="about" id="about">
      <div className="about-img" data-aos="fade-right">
        <div className="about-img-bg">
          <img src={AboutImage} alt="AboutImage" />
        </div>
      </div>
      <div className="about-content" data-aos="fade-left">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer!</h3>
        <p>
          I am a web developer who specializes in creating the visible part of
          websites. I have experience in all aspects of building dynamic web
          projects, from start to finish. I'm skilled in various programming
          languages like{" "}
          <b><span>HTML5</span></b>, <b>
            <span>CSS3</span>
          </b>, <b>
            <span>Bootstrap</span>
          </b>, <b>
            <span>Tailwind CSS</span>
          </b>,  <b>
            <span>JavaScript</span>
          </b>, <b>
            <span>React js</span>
          </b>, <b>
            <span>Next js</span>{" "}
          </b>, <b><span>redux</span></b> and <b>
            <span>Firebase</span>
          </b> which are essential for creating interactive and attractive
          websites. I also have a strong background in managing projects and
          working with clients. Additionally, I have a good understanding of
          ArcMap and data analysis, which helps in examining and interpreting
          geographic information.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </div>
  );
};

export default About;
