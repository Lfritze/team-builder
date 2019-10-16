import React, { useState } from 'react';
import './App.css';


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
      Initial Commit
    </div>
  );
}

export default App;
