const combos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

const computeWinner = (board) => {
    for(let i = 0; i < combos.length; i++) {
        if(board[combos[i][0]] === board[combos[i][1]] && board[combos[i][1]] === board[combos[i][2]] && (board[combos[i][0]] !== '')) {
            return board[combos[i][0]];
        }
    }
    return 'Z';
};

export default computeWinner;