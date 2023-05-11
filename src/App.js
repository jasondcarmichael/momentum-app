import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import DateTime from './components/DateTime';
import Form from './components/Form';
import Win from './components/Win';

function App(props) {
  const [wins, setWins] = useState(props.wins);

  function addWin(name) {
    const newWin = { id: `win-${nanoid()}`, name};
    setWins([...wins, newWin])
  }

  const winsList = props.wins?.map((win) => win.name)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-lg">Momentum</h1>
        <h2>
          Celebrate Your Daily Wins
        </h2>
       
        <DateTime />

        <Form addWin={addWin}/>

        {/* <ul>{winsList}</ul> */}
        <ul className="win-list stack-large stack exception">
          <Win />
        </ul>

         
      </header>
    </div>
  );
}

export default App;
