import aiMove from '../computations/aiMove';

//Board actions

export const renderClickedSpot = (spotClicked, whichTurn = '') => ({
    type: 'SHOW_SQUARE_CLICKED',
    spotClicked,
    whichTurn
});

export const renderAiChoice = (whichTurn = '', board, dif) => { //Turn, board, difficulty
    const spotChosen = aiMove(whichTurn, board, dif, whichTurn); //spotChosen is an object with score and index properties
    return {
        type: 'SHOW_AI_CHOICE',
        whichTurn,
        spotChosen 
    };
};

export const clearBoard = () => ({
    type: 'CLEAR_BOARD'
});