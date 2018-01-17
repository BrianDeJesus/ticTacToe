import React from 'react';
import { connect } from 'react-redux';
import { renderClickedSpot } from '../actions/board';
import { setFirstPlayer, asyncNextPlayer } from '../actions/turn';
import computeWinningCombo from '../computations/computeWinningCombo';
import computeDraw from '../computations/computeDraw';
import { setDrawEnding, setWinner } from '../actions/gameEnding';
import { setHumanScore } from '../actions/score';

export class Square extends React.Component {

    onClickSquare = () => {
        if(this.props.currentTurn.currentPlayer === 'human' && (this.props.board[this.props.id] === '') && (computeWinningCombo(this.props.board) === "Z")) {
            this.props.dispatch(renderClickedSpot(this.props.id, this.props.currentTurn.turn));
            let winner;
            setTimeout(() => { //take a little time to get new changes
                winner = this.props.board[computeWinningCombo(this.props.board)[0]];
                if(winner !== undefined) {
                    this.props.dispatch(setWinner(this.props.currentTurn.currentPlayer));
                    this.props.dispatch(setHumanScore());
                }
            }, 90);
            if(computeDraw(this.props.board)) {
                this.props.dispatch(setDrawEnding());
            }
            this.props.dispatch(asyncNextPlayer(this.props.currentTurn.currentPlayer));
            setTimeout(() => {
                this.props.compResponse();
            }, 400); // wait 4 ms due to async next player being 3 ms
        }
    };

    render() {
        return ( 
            <div>
                <div 
                onClick={this.onClickSquare} 
                className={computeWinningCombo(this.props.board).includes(this.props.id) ? 'Winning-square' : 'Square'}
                >
                    {
                        this.props.board[this.props.id]
                    }
                </div>
            </div>
            );
        };
}

const mapStateToProps = (state) => {
    return {
        board: state.board,
        currentTurn: state.currentTurn
    };
};

export default connect(mapStateToProps)(Square);