//turn actions

export const getNextPlayer = (currentPlayer) => ({ //Current player refers to human or ai
    type: 'GET_NEXT_PLAYER',
    currentPlayer
});

export const asyncNextPlayer = (currentPlayer) => {
    return dispatch => {
        setTimeout(() => {
          // Taking advantage of redux thunk middleware to give some time to show whose turn
          dispatch(getNextPlayer(currentPlayer));
        }, 300);
      };
};

export const setFirstPlayer = (player) => ({
    type: 'SET_FIRST_PLAYER',
    player
});