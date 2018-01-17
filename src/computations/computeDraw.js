import emptySpots from './emptySpots';

const computeDraw = (board) => { //If there are no empty spots return true
    return emptySpots(board).length === 0 ? true : false;
};

export default computeDraw;