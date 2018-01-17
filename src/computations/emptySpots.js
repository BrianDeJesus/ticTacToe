const emptySpots = (board) => { //Return array of empty spots on board
    return board.map((square, index) => {
        if(square === '') { //Returns empty spot index
            return index;
        }
        return undefined; //Returns undefined if spot taken
    }).filter((square) => square !== undefined); 
};

export default emptySpots;