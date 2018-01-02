import difficultyReducer from '../../reducers/difficultyReducer';

test('should return correct number for chosen difficulty', () => {
    const state = difficultyReducer('', {
        type: 'SET_DIFFICULTY',
        difficulty: 'normal'
    });
    expect(state).toBe(2);
});

test('should return correct number for chosen difficulty', () => {
    const state = difficultyReducer('', {
        type: 'SET_DIFFICULTY',
        difficulty: 'insane'
    });
    expect(state).toBe(7);
});