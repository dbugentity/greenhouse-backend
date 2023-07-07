// @ts-nocheck
/**
 *  1. job boards api key gives you access to work with and retrieve the job board
 *  2. submit an application; Use this endpoint to submit a new application.
 *     this endpoint accepts a multipart form POST representing a job application.
 *  3. application forms are job-specific and will be constructed via the 
 *     “questions” array available via the Job method. with this method—Greenhouse 
 *     will NOT confirm the inclusion of required fields. Validation for 
 *     required fields must be done on the client side, as Greenhouse will not 
 *     reject applications that are missing required fields. 
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('currentCities');
  const greenhouseAPI = `https://boards-api.greenhouse.io/v1/boards/${process.env.REACT_APP_GREENHOUSE_API_KEY}/jobs`;

  const jobOpeningsMessage = "Current Job Openings";
  let currentCities = {
    "NY": 1,
    "SF": 2,
    "Portland": 3,
    "London": 4
  };
  const CityButtons = ({ currentCities, filterJobsByLocation }) => {
    return (
      <div>
        {Object.keys(currentCities).map(city => (
          <button key={city} onClick={() => filterJobsByLocation(city)}>
            {city}
          </button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    axios.get(`https://api.greenhouse.io/v1/kinship/${process.env.GREENHOUSE_API_KEY}/jobs`).then
    (response => {
      setJobs(response);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const filterJobsByLocation = (location) => {
    setCurrentLocation(location);
  };

  return (
    <div>
      <div id="job-board-filter">
      </div>
        {Object.keys(currentCities).map(city => (
          <button key={city} onClick={() => filterJobsByLocation(currentCities[city])}>
           {city}
          </button>
  ))}

      {jobs.length > 0 ? (
        jobs.filter(job => currentLocation === 'All' || job.location.name === currentLocation)
          .map((job, index) => (
            <div className="job" key={index}>
              <a href={job.
              absolute_url}>{job.title}</a>
            </div>
          ))
      ) : (
        <div className="no-job">
          <h4>{jobOpeningsMessage}</h4>
        </div>
      )}
    </div>
  );
};

export default JobBoard;
