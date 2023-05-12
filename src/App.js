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

  const winsList = wins.map((win) => (
    <Win 
      id={win.id} 
      name={win.name} 
      completed={win.completed} 
      key={win.id}
    />
  ));

  
  const winsNoun = winsList.length !== 1 ? "accomplishments" : "accomplishment";
  const winsHeading = `${winsList.length} ${winsNoun} today!`


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-lg">Momentum</h1>
        <h2>
          Celebrate Your Daily Wins
        </h2>
       
        <DateTime />
        

        <Form addWin={addWin}/>

        <h3 id="list-heading" tabIndex="-1">
          {winsHeading}
        </h3>
        <ul className="win-list stack-large stack exception">
          {winsList}
        </ul>

         
      </header>
    </div>
  );
}

export default App;
