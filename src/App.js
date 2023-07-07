// @ts-nocheck
import React from 'react';
import './App.css';
import JobBoard from "./components/Greenhouse/JobBoard";
import JobApplication from './components/Greenhouse/JobApplication';
import Introduction from './components/Greenhouse/Introduction/Introduction';

function App() {
  return (
    <div className="App">
      <div>
        <h5>K.</h5>
        <h4>Associates</h4>
      </div>

      <section>
        <Introduction />
        <JobBoard />
        {/* <JobApplication /> */}
      </section>

    </div>
  );
}

export default App;
