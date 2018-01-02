import playAsReducer from '../../reducers/playAsReducer';

test('should set play as state correctly', () => {
    const state = playAsReducer('X', {
        type: 'SET_PLAY_AS',
        charChoice: 'O'
    });
    expect(state).toBe('O');
});

test('should set play as default state correctly', () => {
    const state = playAsReducer('X',{});
    expect(state).toBe('X');
});