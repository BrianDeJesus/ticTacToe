const playAsReducer = (state = 'X', action) => {
    switch(action.type) {
        case 'SET_PLAY_AS': 
            return action.charChoice;
        default:
            return state;
    };
};

export default playAsReducer;