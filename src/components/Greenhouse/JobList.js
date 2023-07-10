// @ts-nocheck
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../JobList.module.scss';

const JobList = ({ selectedDepartment, selectedOffice, selectedJob, handleJobChange }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          'https://boards-api.greenhouse.io/v1/boards/kinship/jobs?content=true'
        );
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    if (
      selectedDepartment &&
      selectedDepartment !== 'All' &&
      job.metadata?.department !== selectedDepartment
    ) {
      return false;
    }
    if (selectedOffice && selectedOffice !== 'All' && job.metadata?.office !== selectedOffice) {
      return false;
    }
    return true;
  });

  return (
    <div>
      {filteredJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul>
          {filteredJobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              {job.metadata && job.metadata.department && (
                <p>Department: {job.metadata.department}</p>
              )}
              {job.metadata && job.metadata.office && (
                <p>Office: {job.metadata.office}</p>
              )}
              {/* {job.content && (
                <div dangerouslySetInnerHTML={{ __html: job.content }} />
              )} */}
              <button onClick={() => handleJobChange(job.id)}>Apply Now</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const JobBoard = () => {
  const [departments, setDepartments] = useState([]);
  const [offices, setOffices] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');
  const [selectedJob, setSelectedJob] = useState('');

  useEffect(() => {
    const fetchDepartmentsAndOffices = async () => {
      try {
        const response = await axios.get(
          'https://boards-api.greenhouse.io/v1/boards/kinship/jobs'
        );
        const { jobs } = response.data;
        const uniqueDepartments = Array.from(
          new Set(jobs.map((job) => job.metadata?.department))
        ).filter(Boolean);
        const uniqueOffices = Array.from(
          new Set(jobs.map((job) => job.metadata?.office))
        ).filter(Boolean);
        setDepartments(uniqueDepartments);
        setOffices(uniqueOffices);
      } catch (error) {
        console.error('Error fetching departments and offices:', error);
      }
    };

    fetchDepartmentsAndOffices();
  }, []);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setSelectedOffice('');
    setSelectedJob('');
  };

  const handleOfficeChange = (event) => {
    setSelectedOffice(event.target.value);
    setSelectedDepartment('');
    setSelectedJob('');
  };

  const handleJobChange = (jobId) => {
    setSelectedJob(jobId);
  };

  return (
    <div>
      <h1 style={{ marginBottom: '0px' }}>Current Job Openings</h1>

      <div id="job-board-filter" className={styles['dropdown-container']}>
        <div>
          <label>Department: </label>
          <select value={selectedDepartment} onChange={handleDepartmentChange}  className={styles['dropdown']} >
            <option value="">All Departments</option>
            <option value="Kinship">Kinship</option>
            <option value="Platform - Brand & Marketing">Platform - Brand & Marketing</option>
            <option value="Platform - Technology">Platform - Technology</option>
            {departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Office: </label>
          <select value={selectedOffice} onChange={handleOfficeChange}  className={styles['dropdown']}>
            <option value="">All Offices</option>
            {offices.map((office, index) => (
              <option key={index} value={office}>
                {office}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedJob && (
        <div>
          <h2>Selected Job</h2>
          <p>Job ID: {selectedJob}</p>
        </div>
      )}

      <JobList
        selectedDepartment={selectedDepartment}
        selectedOffice={selectedOffice}
        selectedJob={selectedJob}
        handleJobChange={handleJobChange}
      />
    </div>
  );
};

export default JobBoard;
