// @ts-nocheck
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://boards-api.greenhouse.io/v1/boards/{board_token}/jobs?content=true', {
          headers: {
            'Content-Type': 'application/json',
            'board_token': '23b3f46ab6eaf9b50e18c1b452e947d6-1'
          }
        });
        if (response.data && response.data.jobs) {
          setJobs(response.data.jobs);
        } else {
          throw new Error('Invalid response data');
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(`Error fetching data from Greenhouse API: ${err.message}`);
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
      {jobs.length > 0 ? (
        jobs.map(job => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.location.name}</p>
            <a href={job.absolute_url}>Job link</a>
            {job.content && <div dangerouslySetInnerHTML={{ __html: job.content }} />}
          </div>
        ))
      ) : (
        <h4>There are currently no job details available.</h4>
      )}
    </div>
  );
}

export default JobList;
