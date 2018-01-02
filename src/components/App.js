import React from 'react';
import Header from './Header';
import Board from './Board';
import Settings from './Settings';
import Message from './Message';

const App = () => {
    return (
      <div className="App">
        <Header />
        <Message />
        <Settings />
        <Board />
      </div>
    );
};

export default App;
