// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./App.scss";
import bg from './assets/png/bg.png';
import Introduction from "./components/Greenhouse/Introduction/Introduction";
import JobApplication from "./components/Greenhouse/JobApplication";
import JobBoard from "./components/Greenhouse/JobBoard";
import JobList from "./components/Greenhouse/JobList";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <header className="site-header" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
        <div className="site-header-mask">
        </div>
      </header>

      <Introduction style={{marginTop: "2%", transform: `translateY(${offsetY * 0.3}px)`}}></Introduction>

      <div style={{marginTop: "2%", transform: `translateY(${offsetY * 0.3}px)`}}>
        <JobApplication/>
      </div>
      

      <JobBoard style={{ transform: `translateY(${offsetY * 1.1}px)`}}/>
        <JobList/>
      
    </section>
  );
}

export default App;
