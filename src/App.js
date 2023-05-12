import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import DateTime from './components/DateTime';
import Form from './components/Form';
import Win from './components/Win';

function App(props) {
  const [wins, setWins] = useState('');
  
  console.log(props.wins)

  // function addWin(name) {
  //   alert(name)
  // }

  // function addWin(name) {
  //   const newWin = { id: `win-${nanoid()}`, name};
  //   setWins([...wins, newWin])
  // }

  // const winsList = props.wins.map((win) => <Win />);

  const winsList = props.wins.map((win) => (
    <Win 
      id={win.id} 
      name={win.name} 
      completed={win.completed} 
      key={win.id}
    />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-lg">Momentum</h1>
        <h2>
          Celebrate Your Daily Wins
        </h2>
       
        <DateTime />
        <Form />

        {/* <Form addWin={addWin}/> */}

        
        <ul className="win-list stack-large stack exception">
          {winsList}
        </ul>

         
      </header>
    </div>
  );
}

export default App;
