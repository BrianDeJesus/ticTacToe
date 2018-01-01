import { renderClickedSpot, clearBoard } from '../../actions/board';

test('should dispatch renderClickedSpot Action', () => {
    const action = renderClickedSpot(2, 'X');
    expect(action).toEqual({
        type: 'SHOW_SQUARE_CLICKED',
        spotClicked: 2,
        whichTurn: 'X'
    });
});

test('should send clear board action', () => {
    const action = clearBoard();
    expect(action).toEqual({
        type: 'CLEAR_BOARD'
    });
});