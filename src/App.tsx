import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click me please" />
      </header>
    </div>
  );
}

export default App;
