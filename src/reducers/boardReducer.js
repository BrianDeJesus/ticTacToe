const emptyBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
];

const boardReducer = (state = emptyBoard, action) => {
    switch(action.type) {
        case 'SHOW_SQUARE_CLICKED': 
            return state.map((square, index) => {
                if(index === action.spotClicked && square === '') {
                    return action.whichTurn;
                }
                return square;
            });
        case 'SHOW_AI_CHOICE':
            return state.map((square, index) => {
                if(index === action.spotChosen) {
                    return action.whichTurn;
                }
                return square;
            });
        case 'CLEAR_BOARD': 
            return emptyBoard;
        default: 
            return state;
    };
};

export default boardReducer;
