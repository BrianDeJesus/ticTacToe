const difficultyReducer = (state = 7, action) => {
    switch(action.type) {
        case 'SET_DIFFICULTY':
            return action.difficulty === 'insane' ? 7 : 2;
        default:
            return state;
    };
};

export default difficultyReducer;