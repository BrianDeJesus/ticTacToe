import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { renderClickedSpot, renderAiChoice } from '../actions/board';
import aiMove from '../computations/aiMove';
import { setFirstPlayer, getNextPlayer } from '../actions/turn';
import computeWinner from '../computations/computeWinner';

class Board extends React.Component {

    compListen = () => {
        if(this.props.currentTurn.currentPlayer === 'ai') {
            this.props.dispatch(renderAiChoice(this.props.currentTurn.turn, this.props.board, 7));
            this.props.dispatch(getNextPlayer(this.props.currentTurn.currentPlayer));
            const winner = computeWinner(this.props.board);
            if(winner !== 'Z') {
                console.log("Winner is ", winner, "!!");
            }
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