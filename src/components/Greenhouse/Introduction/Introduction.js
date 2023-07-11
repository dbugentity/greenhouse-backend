// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { animated, useSpring } from '@react-spring/web';
import styles from './Introduction.module.scss';
import kinshipPageIcons from '../../../assets/png/kinshipPageIcons.png';
import vector from '../../../assets/png/vector.png';
import JobList from '../JobList';


const Introduction = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  const [padding, setPadding] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const fadeIn = useSpring({
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
  });
  const [selectedDepartment, setSelectedDepartment] = useState('All departments');
  const [selectedOffice, setSelectedOffice] = useState('All Offices');

  const departments = ['All departments', 'Kinship', 'Platform - brand & marketing', 'Platform technology'];
  const offices = ['All Offices', 'NY', 'SF'];
  const [activeIndex, setActiveIndex] = useState(null);

  const [accordionOpen, setAccordionOpen] = useState([]);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleOfficeChange = (event) => {
    setSelectedOffice(event.target.value);
  };

  const accordionItems = [
    {
      title: 'The Kin',
      content: `We're one app to make pet parenting actually easier. With The Kin, you can live chat with licensed health, behavior, and nutrition pros, 24/7-and get everyday advice and content, personalized for you (and your pet).`
    },
    { title: 'The Wildest', content: 'Accordion content for The Wildest' },
    { title: 'PetExec', content: 'Accordion content for PetExec' },
    { title: 'Adopt a Pet', content: 'Accordion content for Adopt a Pet' },
    { title: 'VetInsight', content: 'Accordion content for VetInsight' },
    { title: 'Whistle Labs', content: 'Accordion content for Whistle Labs' },
    { title: 'Wisdom Panel', content: 'Accordion content for Wisdom Panel' }
  ].map((item, index) => ({ ...item, id: index, isOpen: false }));

  const [items, setItems] = useState(accordionItems);

  const toggleAccordion = (id) => {
    setItems(items.map((item) => item.id === id ? {...item, isOpen: !item.isOpen} : item));
  };
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const newPadding = Math.min(window.pageYOffset, 100);
      setPadding(newPadding);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { paddingTop, paddingBottom } = useSpring({
    paddingTop: scrollY, // adjust mapping function as needed
    paddingBottom: scrollY, // adjust mapping function as needed
  });

  const getFilteredJobs = () => {
    if (selectedDepartment === 'All departments' && selectedOffice === 'All Offices') {
      return [
        'New York, San Francisco, Portland',
        'Senior Social Media Manager',
        'New York, New York, United States',
        'Principal Software Engineer, React Native',
        'New York, New York, United States',
        'Principal Software Engineer, React Native',
        'San Francisco, CA, United States'
      ];
    } else if (selectedDepartment === 'Kinship' && selectedOffice === 'All Offices') {
      return [
        "Don't see an opening that matches your background? Join our talent community here!",
        'New York, San Francisco, Portland',
        'Senior Social Media Manager',
        'New York, New York, United States',
        'Principal Software Engineer, React Native',
        'New York, New York, United States',
        'Principal Software Engineer, React Native',
        'San Francisco, CA, United States'
      ];
    } else if (
      selectedDepartment === 'Platform - brand & marketing' &&
      selectedOffice === 'All Offices'
    ) {
      return [
        "Don't see an opening that matches your background? Join our talent community here!",
        'New York, San Francisco, Portland',
        'Senior Social Media Manager',
        'New York, New York, United States'
      ];
    } else if (selectedDepartment === 'Platform - technology' && selectedOffice === 'All Offices') {
      return [
        "Don't see an opening that matches your background? Join our talent community here!",
        'New York, San Francisco, Portland',
        'Principal Software Engineer, React Native',
        'New York, New York, United States',
        'Principal Software Engineer, React Native',
        'San Francisco, CA, United States'
      ];
    } else {
      return [];
    }
  };

  const jobs = getFilteredJobs();

  return (
    <ParallaxProvider>
      <animated.div>
        <div>
          <ParallaxProvider y={[-20, 20]}>
            <header className={styles.header}>
              <div className={styles.logoWrapper}>
                <h1 className={styles.logo}>K.</h1>
              </div>
              <div className={styles.headerGrid}>
                <h3 className={styles.subtitle}></h3>
              </div>
            </header>
            <img src={vector} alt="My Image" className={styles.vector} />
            <animated.p style={fadeIn} className={styles.scrollWithParent}>
          We’re The Recruiting Home Of The Kinship Division Of Mars Petcare.
        </animated.p>
        <animated.h1 style={fade} className={styles.brandHeadline}>
          {/* <div className={styles.kinshipPageIcons}>A whole new world.</div> */}
        </animated.h1>
        {/* <p className={styles.scrollWithParent}>We’re The Recruiting Home Of The Kinship Division Of Mars Petcare.</p> */}
        <animated.h1 style={fade} className={styles.brandHeadline}>
          <div className={styles.kinshipPageIcons}>A whole new world.</div>
        </animated.h1>
            {/* <p className={styles.scrollWithParent}>We’re The Recruiting Home Of The Kinship Division Of Mars Petcare.</p> */}
            {/* <h1 className={styles.brandHeadline}>
              <animated.p style={fadeIn}>A Whole New World.</animated.p>
            </h1> */}
            {/* more components */}
            <img src={vector} alt="My Image" className={styles.vector} />
          </ParallaxProvider>

          {/* <animated.div style={{ paddingTop, paddingBottom }}>
      <h2 className={styles.bodyCopy}>We also recruit for at-home diagnostics brands Wisdom and Whistle.</h2>
      <h2 className={styles.bodyCopyThree}>(part of the Science & Diagnostics division)</h2>
      <div>
        <h3 className={styles.bodyCopyTwo}>
          Both Kinship and Science & Diagnostics are divisions of Mars Petcare—and are dedicated to one purpose: creating A BETTER WORLD FOR PETS™. Through comprehensive veterinary care, nutrition, breakthrough programs in diagnostics, wearable health monitoring, DNA testing and pet welfare, our 100,000 Petcare Associates help pets in more than 130 countries.
        </h3>
      </div>

      <p className={styles.bodyCopy}>Interested? Learn more about our open roles below.</p>
    </animated.div> */}

<div style={{ paddingTop: padding, paddingBottom: padding }}>
          <h2 className={styles.bodyCopy}>We also recruit for at-home diagnostics brands Wisdom and Whistle.</h2>
          <h2 className={styles.bodyCopyThree}>(part of the Science & Diagnostics division)</h2>
          <div>
            <h3 className={styles.bodyCopyTwo}>
              Both Kinship and Science & Diagnostics are divisions of Mars Petcare—and are dedicated to one purpose: creating A BETTER WORLD FOR PETS™. Through comprehensive veterinary care, nutrition, breakthrough programs in diagnostics, wearable health monitoring, DNA testing and pet welfare, our 100,000 Petcare Associates help pets in more than 130 countries.
            </h3>
          </div>

          <p className={styles.bodyCopy}>Interested? Learn more about our open roles below.</p>
        </div>
    
          <img src={vector} alt="My Image" className={styles.vectorTwo} />

          <h3>Our Family Of Brands</h3>

          <div className={styles.grid}>
  <div className={styles.card}>
    <div className={styles.front}>
    </div>
    <div className={styles.back}>
      <p>We're one app to make pet parenting actually easier. With The Kin, you can live chat with licensed health, behavior, and nutrition pros, 24/7-and get everyday advice and content, personalized for you (and your pet).</p>
    </div>

  </div>
  <div className={styles.card} id='seo'>
    <div className={styles.front}>
     
    </div>
    <div className={styles.back}>
      <p>We're here to help you keep your cool in the wild world of pet parenting.
Whether it's new pet parent to-dos, product recs, vet advice, training tips, or pet culture content-The Wildest is here to help you ace it for your animal.</p>
    </div>
  </div>
  <div className={styles.card}>
    <div className={styles.front}>
      <h2>PETEXEC</h2>
    </div>
    <div className={styles.back}>
      <p>Back of Card 3</p>
    </div>
  </div>
  
</div>

          <img src={vector} alt="My Image" className={styles.vectorTwo} />
        </div>
        <div>
         
        </div>
      </animated.div>
    </ParallaxProvider>
  );
};

export default Introduction;