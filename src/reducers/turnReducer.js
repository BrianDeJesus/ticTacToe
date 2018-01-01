const defaultState = { //X is always first so it is set to default
    turn: 'X',
    currentPlayer: 'human'
}

const turnReducer = (state = defaultState, action) => { 
    switch(action.type) {
        case 'GET_NEXT_PLAYER': 
            return {
                turn: state.turn === 'X' ? 'O' : 'X',
                currentPlayer: state.currentPlayer === 'human' ? 'ai' : 'human'
            };
        case 'SET_FIRST_PLAYER':
            return {
                turn: 'X',
                currentPlayer: action.firstPlayer
            };
        default:
            return state;
    };
};

export default turnReducer;