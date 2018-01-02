import { setPlayAs } from '../../actions/setPlayAs';

test('should set play as action', () => {
    const action = setPlayAs('X');
    expect(action).toEqual({
        type: 'SET_PLAY_AS',
        charChoice: 'X'
    });
});