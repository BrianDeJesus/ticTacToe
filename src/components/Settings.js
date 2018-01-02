import React from 'react';
import { connect } from 'react-redux';
import { setFirstPlayer, getNextPlayer } from '../actions/turn';
import { renderAiChoice, clearBoard } from '../actions/board';

class Settings extends React.Component {

onPlayAsChange = (e) => {
    this.props.dispatch(clearBoard());
    if(e.target.value === 'O') {
        this.props.dispatch(setFirstPlayer('ai'));
        this.props.dispatch(renderAiChoice('X', this.props.board, 2));
        this.props.dispatch(getNextPlayer('ai'));
    }
};

 render() {
     return (
        <div>
            <span>Difficulty:</span>
            <select>
                <option value="insane">Insane</option>
                <option value="normal">Normal</option>
            </select>
            <span> Play as X's or O's? </span>
            <select onChange={this.onPlayAsChange}>
                <option value="X">X</option>
                <option value="O">O</option>
            </select>
        </div>
    );
 };
};

const mapStateToProps = (state) => ({
    currentTurn: state.currentTurn,
    board: state.board
});

export default connect(mapStateToProps)(Settings);
