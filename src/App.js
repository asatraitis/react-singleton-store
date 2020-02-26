import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './Input';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input />
        <Display />           
      </header>
    </div>
  );
}

export default App;
