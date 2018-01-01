import React from 'react';
import Header from './Header';
import Board from './Board';
import Settings from './Settings';

const App = () => {
    return (
      <div className="App">
        <Header />
        <Settings />
        <Board />
      </div>
    );
};

export default App;
