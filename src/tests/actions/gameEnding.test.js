import { setDrawEnding, setWinner } from '../../actions/gameEnding';

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