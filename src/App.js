import React, { useState } from 'react';
import Form from './components/Form'
import UnitList from './components/UnitList';
// import logo from './logo.svg';
import './App.css';
// import { getMaxListeners } from 'cluster';

function App() {

  const [team, setTeam] = useState([
    // { name: 'Leighton',
    //   email: 'Leighton.Fritze.Tech@gmail.com',
    //   role: 'Tyrannical King'
    // }
  ]);

  const addMember = teamPerson => {
    setTeam([...team, teamPerson]);
  };
  return (
    <div className="App">
      <Form addMember={addMember} />
      <UnitList team={team} />
    </div>
  );
}

export default App;
