import React from 'react';
import { useEffect, useState} from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';
import './GoToTop.css';

function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const goToBtn =()=>{
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    };

    const listenToScroll = ()=>{

      let heightToHidden = 200;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if(winScroll > heightToHidden){
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }

    };
    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll);
        return ()=> window.removeEventListener('scroll', listenToScroll); 
    }, []);

  return (
    <>
       {isVisible && (
         <ul className="top-btn" onClick={goToBtn}>
           <li><AiOutlineArrowUp className='top-btn--icon'/></li>
          </ul> 
       )}
    </>
  )
}


export default GoToTop