import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import DateTime from './components/DateTime';
import Form from './components/Form';

function App(props) {
  const [wins, setWins] = useState(props.wins);

  function addWin(name) {
    const newWin = { id: `win-${nanoid()}`, name};
    setWins([...wins, newWin])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-lg">Momentum</h1>
        <h2>
          Celebrate Your Daily Wins
        </h2>
       
        <DateTime />

        <Form addWin={addWin}/>

         
      </header>
    </div>
  );
}

export default App;
