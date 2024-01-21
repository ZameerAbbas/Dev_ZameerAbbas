
import "./Services.css";
import Serviescom from "./Serviescom";
import Servicesdata from "./Serviesdata";


const Services = () => {

  return (
    <div className="services" id="services">
      <h2 className="heading" >
        My <span>Services</span>
      </h2>
      
    <div className="services-container" >
    
      {Servicesdata.map(function ncard(val){
        return(
          <Serviescom services={val.services}  para={val.para}/>
        )
      })
      }
      </div>
    </div>
  );
};

export default Services;
