// @ts-nocheck
import React, { useState } from 'react';

const Introduction = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedOffice, setSelectedOffice] = useState('All Offices');
  const [jobs, setJobs] = useState([]); // This should be your initial jobs array

  const departments = ['All Departments', 'Kinship', 'Platform - Brand & Marketing', 'Platform - Technology'];
  const offices = ['All Offices', 'New York', 'San Francisco', 'Portland', 'London'];

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    filterJobs(event.target.value, selectedOffice);
  };

  const handleOfficeChange = (event) => {
    setSelectedOffice(event.target.value);
    filterJobs(selectedDepartment, event.target.value);
  };

  const filterJobs = (department, office) => {
    let filteredJobs = jobs; // Replace this with your initial jobs array

    if (department !== 'All Departments') {
      filteredJobs = filteredJobs.filter(job => job.department === department);
    }

    if (office !== 'All Offices') {
      filteredJobs = filteredJobs.filter(job => job.office === office);
    }

    setJobs(filteredJobs);
  };

  return (
    <div>
      <h2>Kinship</h2>
      <h4>Welcome!</h4>
      <p>We’re the recruiting home of the Kinship division of Mars Petcare. </p>
      <p>We also recruit for at-home diagnostics brands Wisdom and Whistle (part of the Science & Diagnostics division).</p>
      <p>Both Kinship and Science & Diagnostics are divisions of Mars Petcare—and are dedicated to one purpose: creating A BETTER WORLD FOR PETS™.</p>
      <p>Through comprehensive veterinary care, nutrition, breakthrough programs in diagnostics, wearable health monitoring, DNA testing and pet welfare, our 100,000 Petcare Associates help pets in more than 130 countries. </p>
      <p>Interested? Learn more about our open roles below.</p>

      <h4>OUR FAMILY OF BRANDS</h4>
      <p>The Kin, The Wildest, PetExec, VetInsight, Adopt a Pet<br />Part of Mars Petcare’s Kinship Division</p>
      <p>Whistle Labs and Wisdom Panel<br />Part of Mars Petcare’s Science & Diagnostics Division</p>

      <div id="job-board-filter">
        <div>
          <label>Department: </label>
          <select value={selectedDepartment} onChange={handleDepartmentChange}>
            {departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Office: </label>
          <select value={selectedOffice} onChange={handleOfficeChange}>
            {offices.map((office, index) => (
              <option key={index} value={office}>
                {office}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.title} - {job.department} - {job.office}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Introduction;
