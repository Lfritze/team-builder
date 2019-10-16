import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'


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
    </div>
  );
}

export default App;
