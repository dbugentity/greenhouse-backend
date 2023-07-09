// @ts-nocheck

import React, { useEffect, useState } from 'react';
import './App.css';
import JobBoard from "./components/Greenhouse/JobBoard";
import JobApplication from './components/Greenhouse/JobApplication';
import Introduction from './components/Greenhouse/Introduction/Introduction';
import JobList from './components/JobList';
import styles from './App.module.scss';
import bg from './assets/png/bg.png';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="app">
      
        <img  style={{ transform: `translateY(-${offsetY * 0.5}px)` }} src={bg} alt="" />
    
      {/* <Introduction /> */}
        
      

      {/* <img src={vector} alt="My Image" className={styles.vector} /> */}
      {/* <p className={styles.scrollWithParent}>We’re The Recruiting Home Of The Kinship Division Of Mars Petcare.</p> */}
      {/* <h1 className={styles.brandHeadline}>
        <div className={styles.kinshipPageIcons}>

        </div>
      </h1> */}

      {/* <img src={vector} alt="My Image" className={styles.vector} /> */}

   {/* <Introduction /> */}
        
      {/* <img  style={{ transform: `translateY(${offsetY* 0.7}px)` }} alt="" }></img> */}
    

    
      <Introduction />
      {/* <JobApplication /> */}
      <div 
      // className={styles.ul}
      style={{ transform: `translateY(${offsetY* 0.2}px)`, background: " #1A1A1A" }}>


    
      </div>
      
        {/* <img  style={{ transform: `translateY(-${offsetY * -0.7}px)` }} src={bg} alt="" /> */}

   
    </section>
  );
}

export default App;
