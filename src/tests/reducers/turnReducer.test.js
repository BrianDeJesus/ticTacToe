import turnReducer from '../../reducers/turnReducer';
import { defaultState, state1, state2, state3 } from '../fixtures/dummyData';

test('should get the next turn correctly if human first', () => {
    const state = turnReducer(defaultState, {
        type: 'GET_NEXT_PLAYER'
    });
    expect(state).toEqual(state1);
}); 

test('should get default turn', () => {
    const state = turnReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(defaultState);
}); 

test('should get next turn correct state if ai is first', () => {
    const state = turnReducer(state2, {
        type: 'GET_NEXT_PLAYER'
    });
    expect(state).toEqual(state3);
});

test('should get default turn', () => {
    const state = turnReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(defaultState);
}); 

test('should return correct first player', () => {
    const state = turnReducer(undefined, {
        type: 'SET_FIRST_PLAYER',
        player: 'ai'
    });
});
