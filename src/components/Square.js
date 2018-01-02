import React from 'react';
import { connect } from 'react-redux';
import { renderClickedSpot } from '../actions/board';
import { setFirstPlayer, getNextPlayer } from '../actions/turn';
import computeWinner from '../computations/computeWinner';
import computeDraw from '../computations/computeDraw';
import { setDrawEnding, setWinner } from '../actions/gameEnding';

class Square extends React.Component {

    onClickSquare = () => {
        if(this.props.currentTurn.currentPlayer === 'human' && (this.props.board[this.props.id] === '') && (computeWinner(this.props.board) === 'Z')) {
            this.props.dispatch(renderClickedSpot(this.props.id, this.props.currentTurn.turn));
            let winner;
            setTimeout(() => { //take a little time to get new changes
                winner = computeWinner(this.props.board);
                if(winner !== 'Z') {
                    this.props.dispatch(setWinner(this.props.currentTurn.currentPlayer));
                }
            }, 90);
            if(computeDraw(this.props.board)) {
                this.props.dispatch(setDrawEnding());
            }
            setTimeout(() => {
                this.props.dispatch(getNextPlayer(this.props.currentTurn.currentPlayer));
                this.props.compListen();
            }, 100);
        }
    };

    render() {
        return ( 
            <div>
                <div onClick={this.onClickSquare} className="Square">
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