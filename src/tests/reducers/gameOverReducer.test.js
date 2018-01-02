import gameOverReducer from '../../reducers/gameOverReducer';

test('should set game draw return correctly', () => {
    const state = gameOverReducer('', {
        type: 'SET_DRAW'
    });
    expect(state).toBe('draw');
});

test('should set winner return correctly', () => {
    const state = gameOverReducer('', {
        type: 'SET_WINNER',
        winner: 'ai'
    });
    expect(state).toBe('ai');
});

test('should set default return correctly', () => {
    const state = gameOverReducer('', {});
    expect(state).toBe('');
});