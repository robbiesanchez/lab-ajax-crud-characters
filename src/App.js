import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


axios.get('http://localhost:8000/characters').then(res=>{
  console.log(res.data)
})


axios.post('http://localhost:8000/characters', 
{
  "id": 999,
  "name": "Coolboy55",
  "occupation": "Lives under the sea",
  "weapon": "Code",
  "cartoon": true
  },
).then(res=>{
  console.log(res.data)
})

axios.post('http://localhost:8000/characters', 
{
  "id": 999,
  "name": "Coolboy55",
  "occupation": "Lives under the sea",
  "weapon": "Code",
  "cartoon": true
  },
).then(res=>{
  console.log(res.data)
})

export default App;
