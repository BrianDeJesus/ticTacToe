import emptySpots from './emptySpots';

const computeDraw = (board) => {
    if (emptySpots(board).length === 0) {
        return true;
    }
    return false;
};

export default computeDraw;