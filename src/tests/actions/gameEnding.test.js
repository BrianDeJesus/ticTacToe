import { setDrawEnding, setWinner, setRestart } from '../../actions/gameEnding';

test('should send DRAW action', () => {
    const action = setDrawEnding();
    expect(action).toEqual({
        type: 'SET_DRAW'
    });
});

test('should send WINNER action', () =>{
    const action = setWinner('human');
    expect(action).toEqual({
        type: 'SET_WINNER',
        winner: 'human'
    });
});

test('should send set restart game action', () => {
    const action = setRestart();
    expect(action).toEqual({
        type: 'SET_RESTART'
    });
});