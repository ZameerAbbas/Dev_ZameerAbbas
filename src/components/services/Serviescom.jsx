import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiCodeAlt } from "react-icons/bi";

const Serviescom = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="services-box"  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="4000">
      <BiCodeAlt />
      <h3>{props.services}</h3>
      <p>
        {props.para}
      </p>
     
    </div>
  );
};

export default Serviescom;
