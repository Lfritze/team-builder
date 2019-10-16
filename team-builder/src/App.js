import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const [teamMember, setTeamMember] = useState([]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// **************INSTRUCTIONS

// initial commit
// STEP 1 - Setup your state
// Import the useState hook and set up a state property for your team members list

// Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.

// Render your list of team members
