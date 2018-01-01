import boardReducer from '../../reducers/boardReducer';
import { defaultBoard, board1, board2 } from '../fixtures/dummyData';

test('should set default state', () => {
    const state = boardReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(defaultBoard);
});

test('should return new board with spot clicked', () => {
    const state = boardReducer(board1, {
        type: 'SHOW_SQUARE_CLICKED',
        spotClicked: 2,
        whichTurn: 'X'
    });
    expect(state).toEqual(board2);
});

test('should return same looking board if spot already taken', () => {
    const state = boardReducer(board2, {
        type: 'SHOW_SQUARE_CLICKED',
        spotClicked: 2,
        whichTurn: 'O'
    });
    expect(state).toEqual(board2);
});

test('should return a cleared board', () => {
    const state = boardReducer(board2, {
        type: 'CLEAR_BOARD'
    });
    expect(state).toEqual(defaultBoard);
});

