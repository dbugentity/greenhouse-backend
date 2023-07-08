// @ts-nocheck
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from '../JobList.module.scss';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://boards-api.greenhouse.io/v1/boards/kinship}', {
          headers: {
            Accept: 'application/json, text/plain, */*', 'Content-Type': null, board_token: 'whistlelabs',
          }
        });
        // const response = await axios.get('https://kinship.co/job-search/kinship', {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'board_token': 'kinship',
        //   }
        // });
        if (response && response) {
          setJobs(response.data);
          console.log('response:', response);
        } else {
          throw new Error('Invalid response data');
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(`${err.message}`);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h4>Error occurred while fetching jobs data from Greenhouse API due to:</h4>
        <p>{error}</p>
      </div>
    );
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
