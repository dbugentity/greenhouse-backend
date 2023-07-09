// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./App.scss";
import bg from './assets/png/bg.png';
import Introduction from "./components/Greenhouse/Introduction/Introduction";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <Introduction  style={{ transform: `translateY(${offsetY * 0.2}px)`}}></Introduction>
      <div
      
      >
           <img  style={{ transform: `translateY(${offsetY * 0.2}px)`}} src={bg} alt=""></img>
      </div>

    </section>
  );
}

export default App;
