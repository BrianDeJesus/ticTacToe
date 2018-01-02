import { setDifficulty } from '../../actions/setDifficulty';

test('should dispense set difficulty action', () => {
    const action = setDifficulty('insane');
    expect(action).toEqual({
        type: 'SET_DIFFICULTY',
        difficulty: 'insane'
    });
});
