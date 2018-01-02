
const gameOverReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_DRAW':
            return 'draw';
        case 'SET_WINNER':
            return action.winner;
        case 'SET_RESTART':
            return '';
        default:
            return state;
    };
};

export default gameOverReducer;