// @ts-nocheck
<<<<<<< Updated upstream
/**
 * first draft page to integrate the job boards api key. 
 * what it does/different endpoints/knowledge stack:
 *  1. job boards api key gives you access to work with and retrieve the job board
 *  2. submit an application; Use this endpoint to submit a new application.
 *     this endpoint accepts a multipart form POST representing a job application.
 *  3. application forms are job-specific and will be constructed via the 
 *     “questions” array available via the Job method. with this method—Greenhouse 
 *      will NOT confirm the inclusion of required fields. Validation for 
 *     required fields must be done on the client side, as Greenhouse will not 
 *     reject applications that are missing required fields. 
 */

import React, { useEffect, useState } from 'react';
=======
>>>>>>> Stashed changes
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function JobBoard() {
  const [jobs, setJobs] = useState([]);
<<<<<<< Updated upstream
  const [currentLocation, setCurrentLocation] = useState('currentCities');
  const greenhouseAPI = "https://boards-api.greenhouse.io/v1/boards/99ff0ce83b8c462a7fb838cf5d5817b7-1/api/jobs";
  const noJobMessage = "Don't see an opening that matches your background? Join our talent community here!";
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
    axios.post("https://api.greenhouse.io/v1/kinship/99ff0ce83b8c462a7fb838cf5d5817b7-1/jobs/").then
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
        <button onClick={() => filterJobsByLocation('Department')}>Department</button>
        <button onClick={() => filterJobsByLocation('Office')}>Office</button>
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
          <h4>{noJobMessage}</h4>
=======
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
      const response = await axios.get('https://boards-api.greenhouse.io/v1/boards/23b3f46ab6eaf9b50e18c1b452e947d6-1/jobs');
        setJobs(response.data.jobs);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data from Greenhouse API');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {jobs.length > 0 ? jobs.map(job => (
        <div key={job.id}>
          <a href={job.absolute_url}>{job.title}</a>
>>>>>>> Stashed changes
        </div>
      )) : (
        <h4>There are currently no open vacancies. If you'd like to be considered for the future, please email your resume to kinship.co!</h4>
      )}
    </div>
  );
}

export default JobBoard;

<script
  type="text/javascript"
  src="https://boards-api.greenhouse.io/v1/example/method/url?callback=">
</script>
