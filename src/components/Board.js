import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { renderAiChoice } from '../actions/board';
import { setFirstPlayer, asyncNextPlayer } from '../actions/turn';
import computeWinner from '../computations/computeWinner';
import computeDraw from '../computations/computeDraw';
import { setDrawEnding, setWinner } from '../actions/gameEnding';
import { setAiScore } from '../actions/score';

class Board extends React.Component {

    compResponse = () => { //AI response to human click
        if(this.props.currentTurn.currentPlayer === 'ai' && (computeWinner(this.props.board) === 'Z')) {
            this.props.dispatch(renderAiChoice(this.props.currentTurn.turn, this.props.board, this.props.gameDifficulty));
            const winner = computeWinner(this.props.board);
            
            if(winner !== 'Z') {
                this.props.dispatch(setWinner(this.props.currentTurn.currentPlayer));
                this.props.dispatch(setAiScore());
            }
            else if(computeDraw(this.props.board)) {
                this.props.dispatch(setDrawEnding());
            }
            this.props.dispatch(asyncNextPlayer(this.props.currentTurn.currentPlayer));
        }
    };
    render() {
        return  (
            <div>
                <div className="Board" >
                    {
                        this.props.board.map((square, index) => {
                            return <Square key={index} id={index} compResponse={this.compResponse} />
                        })
                    }
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        board: state.board,
        currentTurn: state.currentTurn,
        gameDifficulty: state.gameDifficulty
    };
};

export default connect(mapStateToProps)(Board);