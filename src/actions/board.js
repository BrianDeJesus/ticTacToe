import aiMove from '../computations/aiMove';

//Board actions

export const renderClickedSpot = (spotClicked, whichTurn = '') => ({
    type: 'SHOW_SQUARE_CLICKED',
    spotClicked,
    whichTurn
});

export const renderAiChoice = (whichTurn = '', board, dif) => { //Turn, board, difficulty
    let spotChosen = aiMove(whichTurn, board, dif, whichTurn).index; //aiMove returns object with score and index properties
    if(spotChosen === undefined) {
        spotChosen = 2;
    }
    return {
        type: 'SHOW_AI_CHOICE',
        spotChosen, 
        whichTurn
    };
};

export const clearBoard = () => ({
    type: 'CLEAR_BOARD'
});