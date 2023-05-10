import './App.css';
import DateTime from './components/DateTime';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-lg">Momentum</h1>
        <h2>
          Celebrate Your Daily Wins
        </h2>
       
        <h3>What I accomplished today:
        </h3>
        <DateTime />

         
      </header>
    </div>
  );
}

export default App;
