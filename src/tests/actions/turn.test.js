import { getNextPlayer, setFirstPlayer } from '../../actions/turn';

test('should send next player action correctly', () => {
    const action = getNextPlayer('human');
    expect(action).toEqual({
        type: 'GET_NEXT_PLAYER',
        currentPlayer: 'human'
    });
});

test('should send set first player action', () => {
    const action = setFirstPlayer('ai');
    expect(action).toEqual({
        type: 'SET_FIRST_PLAYER',
        player: 'ai'
    });
});