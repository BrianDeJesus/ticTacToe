import React from 'react';
import { connect } from 'react-redux';

const Message = (props) => {
    const ending = props.gameEnding;
    let ender;
    switch(ending) {
        case 'draw': 
            ender = 'It\'s a draw!';
            break;
        case 'human':
            ender = 'You Won!';
            break;
        case 'ai':
            ender = 'You lost!';
            break;
    };
    return (
        <div>
            {
            !!props.gameEnding && <p>{ender}</p> 
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    gameEnding: state.gameEnding
});

export default connect(mapStateToProps)(Message);