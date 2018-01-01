//Board actions

export const renderClickedSpot = (spotClicked, whichTurn = '') => ({
    type: 'SHOW_SQUARE_CLICKED',
    spotClicked,
    whichTurn
});

export const clearBoard = () => ({
    type: 'CLEAR_BOARD'
});