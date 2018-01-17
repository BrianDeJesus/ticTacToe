import React from 'react';
import { connect } from 'react-redux';

export const Scores = (props) => {
    return (
        <div className="Score-container">
            <span className="Human-score"> 
                You: {props.humanScore}
            </span>
            <span className="Ai-score"> 
                AI: {props.aiScore}
            </span>
        </div>
    );
};

const mapStateToProps = (state) => ({
    humanScore: state.scores.humanScore,
    aiScore: state.scores.aiScore
});

export default connect(mapStateToProps)(Scores);