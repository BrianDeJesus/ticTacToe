import React from 'react';
import { connect } from 'react-redux';
import { setFirstPlayer, asyncNextPlayer } from '../actions/turn';
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
        this.props.dispatch(asyncNextPlayer('ai'));
    } 
};

onPlayAsChange = (e) => {
    this.props.dispatch(clearBoard());
    this.props.dispatch(setRestart());
    this.props.dispatch(setPlayAs(e.target.value));
    if(e.target.value === 'O') {
        this.props.dispatch(setFirstPlayer('ai'));
        this.props.dispatch(renderAiChoice('X', this.props.board, this.props.gameDifficulty));
        this.props.dispatch(asyncNextPlayer('ai'));
    } else {
        this.props.dispatch(setFirstPlayer('human'));
    }
};

onRestartGame = () => {
    this.props.dispatch(clearBoard());
    this.props.dispatch(setRestart());
    if(this.props.playAs === 'O') {
        this.props.dispatch(setFirstPlayer('ai'));
        this.props.dispatch(renderAiChoice('X', this.props.board, this.props.gameDifficulty));
        this.props.dispatch(asyncNextPlayer('ai'));
    } 
};

 render() {
     return (
        <div className="Settings-container">
            <span className="Settings-label">Difficulty:</span>
            <select onChange={this.onDifficultyChange} className="Options-select">
                <option value="insane">Insane</option>
                <option value="normal">Normal</option>
            </select>
            <span className="Settings-label"> X or O? </span>
            <select onChange={this.onPlayAsChange} className="Options-select">
                <option value="X">X</option>
                <option value="O">O</option>
            </select>
            <button onClick={this.onRestartGame} className="Restart-button">
                Restart
            </button>
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
