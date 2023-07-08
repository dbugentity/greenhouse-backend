<<<<<<< Updated upstream
import './App.css';
import JobBoard from './components/Greenhouse/JobBoard';
import JobApplication from './components/Greenhouse/JobApplication';
=======
// @ts-nocheck
import React from 'react';
import styles from './App.module.scss';
import JobBoard from "./components/Greenhouse/JobBoard";
import JobApplication from './components/Greenhouse/JobApplication';
import Introduction from './components/Greenhouse/Introduction/Introduction';
import JobList from './components/Greenhouse/JobList';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
       <h3>K.</h3>
       <h3>Associates</h3>
  
      <JobBoard/>
      <JobApplication/>
=======
      
      <section>
        {/* <Introduction /> */}
        {/* <JobBoard /> */}
        {/* <JobApplication /> */}
        <JobList />
      </section>

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
