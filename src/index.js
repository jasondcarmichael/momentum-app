import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "win-0", name: "Write Code" },
  { id: "win-1", name: "Meet with Mentor" },
  { id: "win-2", name: "Post on LinkedIn" },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App wins={DATA}/>
  </React.StrictMode>
);


