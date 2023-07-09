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
        const response = await axios.get('https://boards-api.greenhouse.io/v1/boards/{board_token}', {
          headers: {
            Accept: 'application/json, text/plain, */*', 'Content-Type': null, board_token: 'whistlelabs',
          }
        });

        

//         const response = await axios.get('https://api.greenhouse.io/v1/kinship/jobs', {
//           headers: {
//             Accept: 'application/json, text/plain, */*', 'Content-Type': null, board_token: 'whistlelabs',
//           }
// });
        if (response && response) {
          setJobs(response);
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
        <h4>{jobs}</h4>
      )}
         {/* {jobs.length > 0 ? (
          console.log(jobs),
            <ul>
              {jobs.map((jobs, index) => (
                <li key={index}>{jobs}</li>
              ))}
            </ul>
          ) : (
            <p>{jobs.length}
            </p>
            
          )} */}
          
    </div>
  
  );
  
}

export default JobList;