import { renderClickedSpot, clearBoard, renderAiChoice } from '../../actions/board';
import { board7 } from '../fixtures/dummyData';

test('should dispatch renderClickedSpot Action', () => {
    const action = renderClickedSpot(2, 'X');
    expect(action).toEqual({
        type: 'SHOW_SQUARE_CLICKED',
        spotClicked: 2,
        whichTurn: 'X'
    });
});

test('should dispatch aiChoice Action ', () => {
    let action = renderAiChoice('O', board7, 7);
    expect(action).toEqual({
        type: 'SHOW_AI_CHOICE',
        whichTurn: 'O',
        spotChosen: expect.any(Number)
    });
    expect(action.spotChosen.index).not.toBe(0);
});

test('should send clear board action', () => {
    const action = clearBoard();
    expect(action).toEqual({
        type: 'CLEAR_BOARD'
    });
});