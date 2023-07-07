import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Introduction = () => {
  const [title, setTitle] = useState([]);
  const [leftGrid, setLeftGrid] = useState("");
  const [rightGrid, setRightGrid] = useState("");
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    axios.get("https://api.greenhouse.io/v1/boards/99ff0ce83b8c462a7fb838cf5d5817b7-1/api/jobs")
      .then(response => {
        setTitle(response.data.title);
        setLeftGrid(response.data.leftGrid);
        setRightGrid(response.data.rightGrid);
        setSubtitle(response.data.subtitle);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className="grid">
        <div className="left">{leftGrid}</div>
        <div className="right">{rightGrid}</div>
      </div>
    </div>
  );
};

export default Introduction;

