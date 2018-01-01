import React from 'react';
import { connect } from 'react-redux';
import { renderClickedSpot } from '../actions/board';
import { setFirstPlayer, getNextPlayer } from '../actions/turn';
import computeWinner from '../computations/computeWinner';

class Square extends React.Component {

    onClickSquare = () => {
        if(this.props.currentTurn.currentPlayer === 'human' && (this.props.board[this.props.id] === '') && (computeWinner(this.props.board) === 'Z')) {
            this.props.dispatch(renderClickedSpot(this.props.id, this.props.currentTurn.turn));
            this.props.dispatch(getNextPlayer(this.props.currentTurn.currentPlayer));
            setTimeout(() => {
                    this.props.compListen();
                }, 100);
            const winner = computeWinner(this.props.board);
            if(winner !== 'Z') {
                console.log("Winner is ", winner, "!!");
            }
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