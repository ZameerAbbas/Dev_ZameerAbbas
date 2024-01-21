import React from 'react';
import "./Portfolio.css";
import Protfoliocom from "./Protfoliocom";
import Portfoliodata from "./Portfoliodata";

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <h2 className="heading">Latest <span>Project</span></h2>
        <div className="portfolio-container">
        {Portfoliodata.map(function ncard(val){
        return(
          <Protfoliocom img={val.img} heading={val.heading} href={val.href} github={val.github}/>
        )
      })
      }
        </div>
    </div>
  )
}

export default Portfolio