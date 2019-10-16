import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import TeamList from './components/TeamList';


function App() {

  const [myTeam, setMyTeam] = useState([
    //  {name: 'Leighton',
    //   email: 'LeightonFritze@gmail.com'
    //   role: 'CEO'
    // }
  ]);

  const addPerson = newPerson => {
    setMyTeam([...myTeam, newPerson]);
  };

  return (
    <div className="App">
      <Form addPerson={addPerson} />
      <TeamList myTeam={myTeam} />
    </div>
  );
}

export default App;
