import React from 'react';
import Header from './Header';
import Board from './Board';
import Settings from './Settings';
import Message from './Message';
import Scores from './Scores';

const App = () => {
    return (
      <div className="App">
        <Header />
        <Scores />
        <Message />
        <Settings />
        <Board />
      </div>
    );
};

export default App;
