import React, { useEffect } from "react";
import "./Home.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Porfile from "../image/profile.jpg";
import Pdf from "../CV_ZMR_FINAL.pdf"
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className="home" id="home">
      <div className="home-image block"  >
        <div className="img-bg" >
          {/* <img src={Porfile} alt="homeImage"  data-aos="fade-right" /> */}
        </div>
      </div>
      <div className="home-content" data-aos="fade-right">
        <h3>
          Hello, It's <span>Me</span>
        </h3>
        <h1>Zameer Abbas</h1>
        <h3>
          And I'm a <span>Frontend Develpoer</span>
        </h3>
        <p>
          I am a particularly reputed Web Programmer, I have enormous experience
          in making frontends of web applications using numerous innovations. I
          altogether put confidence in customer satisfaction. In this way, it is
          ensured that the work will fulfill each mechanical standard. You don't
          need to pressure if you need a responsive and viably accessible site
          to be made without any planning. my skills are HTML CSS javascript
          react-js, redux and other frameworks
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100007180335769">
            <FaFacebookF />
          </a>
          <a href="https://github.com/ZameerAbbas">
            <BsGithub />
          </a>
          <a href="https://www.instagram.com/zamir_meloo/" target="_blank">
            <AiFillInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/zameer-abbas-82815b203?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrMQDEYgZSPuIwKckirkmLA%3D%3D"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <a href={Pdf} className="btn" download >
          Download CV
        </a>
      </div>
      {/* <div className="home-image hidden">
        <div className="img-bg">
          <img src={Porfile} alt="homeImage" />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
