import React from 'react';
import { connect } from 'react-redux';
import { getNextPlayer, setFirstPlayer } from '../actions/turn';
import { renderAiChoice, clearBoard } from '../actions/board';
import { setDifficulty } from '../actions/setDifficulty';
import { setRestart } from '../actions/gameEnding';
import { setPlayAs } from '../actions/setPlayAs';

class Settings extends React.Component {

onDifficultyChange = (e) => {
    this.props.dispatch(clearBoard());
    this.props.dispatch(setDifficulty(e.target.value));
    this.props.dispatch(setRestart());
    if(this.props.playAs === 'O') {
        this.props.dispatch(setFirstPlayer('ai'));
        this.props.dispatch(renderAiChoice('X', this.props.board, this.props.gameDifficulty));
        this.props.dispatch(getNextPlayer('ai'));
    } 
};

onPlayAsChange = (e) => {
    this.props.dispatch(clearBoard());
    this.props.dispatch(setRestart());
    this.props.dispatch(setPlayAs(e.target.value));
    if(e.target.value === 'O') {
        this.props.dispatch(setFirstPlayer('ai'));
        this.props.dispatch(renderAiChoice('X', this.props.board, this.props.gameDifficulty));
        this.props.dispatch(getNextPlayer('ai'));
    } else {
        this.props.dispatch(setFirstPlayer('human'));
    }
};

 render() {
     return (
        <div>
            <span>Difficulty:</span>
            <select onChange={this.onDifficultyChange}>
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
    board: state.board,
    gameDifficulty: state.gameDifficulty,
    playAs: state.playAs
});

export default connect(mapStateToProps)(Settings);
