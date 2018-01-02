const defaultScores = {
    humanScore: 0,
    aiScore: 0
};

const scoreReducer = (state = defaultScores, action) => {
    switch(action.type) {
        case 'INCREMENT_HUMAN_SCORE': 
            return {
                ...state,
                humanScore: ++state.humanScore
            };
        case 'INCREMENT_AI_SCORE':
            return {
                ...state,
                aiScore: ++state.aiScore
            };
        default:
            return state;
    };
};

export default scoreReducer;