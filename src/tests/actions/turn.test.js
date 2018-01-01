import { getNextPlayer, setFirstPlayer } from '../../actions/turn';

test('should sent next player action correctly', () => {
    const action = getNextPlayer('human');
    expect(action).toEqual({
        type: 'GET_NEXT_PLAYER',
        currentPlayer: 'human'
    });
});

test('should set first player correctly', () => {
    const action = setFirstPlayer('human');
    expect(action).toEqual({
        type: 'SET_FIRST_PLAYER',
        firstPlayer: 'human'
    });
});
