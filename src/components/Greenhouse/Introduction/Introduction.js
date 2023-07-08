// @ts-nocheck
import React, { useState } from 'react';
import styles from './Introduction.module.scss'; // try to work consistently with scss
import kinshipPageIcons from '../../../assets/png/kinshipPageIcons.png';
import vector from '../../../assets/png/vector.png';

const Introduction = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedOffice, setSelectedOffice] = useState('All Offices');
  const [jobs, setJobs] = useState([]); // This should be initial jobs array

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
    let filteredJobs = jobs;

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
        <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <h1 className={styles.logo}>R1</h1>
    
        </div>

        <div className={styles.headerGrid}>
          <h3 className={styles.subtitle}></h3>
        </div>
        
      </header>
      {/* <img src={kinshipPageIcons} alt="Kinship Page Icons" className={styles.kinshipPageIcons} /> */}

          {/* <img src={vector} alt="My Image" className={styles.vector} /> */}
          {/* <img src={kinshipPageIcons} alt="Kinship Page Icons" className={styles.kinshipPageIcons} /> */}

          <img src={vector} alt="My Image" className={styles.vector} />
      <p className={styles.scrollWithParent}>We’re The Recruiting Home Of The Kinship Division Of Mars Petcare.</p>
     
      <h1 className={styles.brandHeadline}>
        
        <div className={styles.kinshipPageIcons}>
        A whole new world.
        </div>
        </h1>

          <img src={vector} alt="My Image" className={styles.vector} />
      
      <h2 className={styles.bodyCopy}>We also recruit for at-home diagnostics brands Wisdom and Whistle.</h2>
      <h2 className={styles.bodyCopyThree}>(part of the Science & Diagnostics division)</h2>
      <div >
        <h3 className={styles.bodyCopyTwo}>
        Both Kinship and Science & Diagnostics are divisions of Mars Petcare—and are dedicated to one purpose: creating A BETTER WORLD FOR PETS™. Through comprehensive veterinary care, nutrition, breakthrough programs in diagnostics, wearable health monitoring, DNA testing and pet welfare, our 100,000 Petcare Associates help pets in more than 130 countries. 
        </h3>
      </div>
      
      <p  className={styles.bodyCopy}>Interested? Learn more about our open roles below.</p>

      <img src={vector} alt="My Image" className={styles.vectorTwo}  />

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
