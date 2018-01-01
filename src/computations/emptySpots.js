const emptySpots = (board) => {
    return board.map((square, index) => {
        if(square === '') {
            return index;
        }
        return undefined;
    }).filter((square) => square !== undefined); 
};

export default emptySpots;