import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Protfoliocom = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="portfolio-box"
        data-aos="flip-down"
      >
        <img src={props.img} alt="imageOne" />
        <div className="portfolio-layer">
          <h4>{props.heading}</h4>
          <p></p>
          <div className="links">
            <a href={props.href}>
              <BiLinkExternal />
            </a>
            <a href={props.github}>
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protfoliocom;
