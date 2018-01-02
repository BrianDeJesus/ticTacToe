import React from 'react';
import { connect } from 'react-redux';

const Scores = (props) => {
    return (
        <div>
            <span> 
                You: {props.humanScore}
            </span>
            <span> 
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