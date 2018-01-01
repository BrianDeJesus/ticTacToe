//turn actions

export const getNextPlayer = (currentPlayer) => ({ //Current player refers to human or ai
    type: 'GET_NEXT_PLAYER',
    currentPlayer
});

export const setFirstPlayer = (firstPlayer) => ({
    type: 'SET_FIRST_PLAYER',
    firstPlayer
});