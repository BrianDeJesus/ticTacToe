import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { renderAiChoice } from '../actions/board';
import { setFirstPlayer, getNextPlayer } from '../actions/turn';
import computeWinner from '../computations/computeWinner';
import computeDraw from '../computations/computeDraw';
import { setDrawEnding, setWinner } from '../actions/gameEnding';

class Board extends React.Component {

    compListen = () => {
        if(this.props.currentTurn.currentPlayer === 'ai' && (computeWinner(this.props.board) === 'Z')) {
            this.props.dispatch(renderAiChoice(this.props.currentTurn.turn, this.props.board, 2));
            //this.props.dispatch(getNextPlayer(this.props.currentTurn.currentPlayer));
            const winner = computeWinner(this.props.board);
            //console.log(this.props.currentTurn.currentPlayer);
            if(winner !== 'Z') {
                this.props.dispatch(setWinner(this.props.currentTurn.currentPlayer));
            }
            if(computeDraw(this.props.board)) {
                this.props.dispatch(setDrawEnding());
            }
            this.props.dispatch(getNextPlayer(this.props.currentTurn.currentPlayer));
        }
    };
    render() {
        return  (
            <div>
                <div className="Board" >
                    {
                        this.props.board.map((square, index) => {
                            return <Square key={index} id={index} compListen={this.compListen} />
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
        currentTurn: state.currentTurn
    };
};

export default connect(mapStateToProps)(Board);