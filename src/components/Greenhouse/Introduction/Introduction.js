// @ts-nocheck
import React, { Children, useState, useRef, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { animated, useSpring } from '@react-spring/web';
import styles from './Introduction.module.scss'; 
import bg from '../../../assets/png/bg.png';
import vector from '../../../assets/png/vector.png';
import {motion, useAnimation, useInView, useScroll, useTransform} from 'framer-motion';


const Introduction = ({children, width = "fit-content"}) => {
  let {scrollYProgress} = useAnimation(['0%', '100%']);
  let y = useTransform( [0, 5], ["0%", "100%"]);

  const ref = useRef(null);
  const isInView= useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible");
    };
  }, [isInView]);
  
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
   
<motion.div 
variants={{
  hidden: {opacity: 0, y: 75},
  visible: {opacity: 1, y: 0}
}}
initial='hidden'
animate={mainControls}
transition={{duration: 0.5, delay: 0.25} }
>
</motion.div>
{/* <section className='w-escape relative -mt-[76px] flex flex-col pt -[76px]'>

</section> */}

  <div>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <h1 className={styles.logo}>R1</h1>
        </div>
        <div className={styles.headerGrid}>
          <h3 className={styles.subtitle}></h3>
        </div>
      </header>
      <img src={vector} alt="My Image" className={styles.vector} />
      <p className={styles.scrollWithParent}>We’re The Recruiting Home Of The Kinship Division Of Mars Petcare.</p>
      <h1 className={styles.brandHeadline}>
        <div className={styles.kinshipPageIcons}>
          A whole new world.
        </div>
      </h1>

      <img src={vector} alt="My Image" className={styles.vector} />

</div>
<h2 className={styles.bodyCopy}>We also recruit for at-home diagnostics brands Wisdom and Whistle.</h2>
<h2 className={styles.bodyCopyThree}>(part of the Science & Diagnostics division)</h2>
<div >
  <h3 className={styles.bodyCopyTwo}>
    Both Kinship and Science & Diagnostics are divisions of Mars Petcare—and are dedicated to one purpose: creating A BETTER WORLD FOR PETS™. Through comprehensive veterinary care, nutrition, breakthrough programs in diagnostics, wearable health monitoring, DNA testing and pet welfare, our 100,000 Petcare Associates help pets in more than 130 countries.
  </h3>
</div>

<p className={styles.bodyCopy}>Interested? Learn more about our open roles below.</p>

<img src={bg} alt="My Image" className={styles.vectorTwo} />

<h4 className={styles.bodyCopyFour}>Our Family Of Brands</h4>
<h5 className={styles.copy} style={{padding: "0"}}>Discover the wonders and surprises that await you as you hover overthem!</h5>

<ul className={styles.ul}>
<li><a href="#">The Kin</a>
<img src={bg} alt="" className={styles.ulImg} style={{display: "none"}}/>
</li>
<li><a href="#">The Wildest</a></li>
<li><a href="#">PetExec</a></li>
<li><a href="#">Adopt a Pet</a></li>
<li><a href="#">VetInsight</a></li>
<li><a href="#">Whistle Labs</a></li>
<li><a href="#">Wisdom Panel</a></li>
</ul>

<div id="job-board-filter" className={styles['dropdown-container']}>
        <div>
          <label>Department: </label>
          <select value={selectedDepartment} onChange={handleDepartmentChange} className={styles['dropdown']}>
            {departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>All Offices: </label>
          <select value={selectedOffice} onChange={handleOfficeChange} className={styles['dropdown']}>
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