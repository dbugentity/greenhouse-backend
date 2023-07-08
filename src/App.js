// @ts-nocheck

import React from 'react';
import './App.css';
import JobBoard from "./components/Greenhouse/JobBoard";
import JobApplication from './components/Greenhouse/JobApplication';
import Introduction from './components/Greenhouse/Introduction/Introduction';
import JobList from './components/JobList';

function App() {
  return (
    <div className="App">

      <section>
        <Introduction />
        <JobBoard />
        <JobApplication />
        <JobList/>
      </section>

    </div>
  );
}

export default App;
