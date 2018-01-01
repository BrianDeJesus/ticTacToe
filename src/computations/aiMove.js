import emptySpots from './emptySpots';

//state.board will be passed to board
const aiMove = (player, board, depth, aiTurn) => { //player and aiTurn should be state.currentTurn.turn
    // base cases
    if(virtualWin(board) === aiTurn){
      return {score: 100 - depth};
    } else if(virtualWin(board) !== aiTurn){
        return {score: depth - 100};
    } else if (virtualDraw(board)){
      return {score: 0};
    }
    else if (depth === 0) return {score: 0};
  
    const availSpots = emptySpots(board);
    
    let moves = [];
    let otherPlayer;
  
    for(let i = 0; i < availSpots.length; i++){
      let move = {};
      move.index = availSpots[i];
      board[availSpots[i]] = player;
  
      otherPlayer = player === 'X' ? 'O' : 'X';
      let result = minimax(otherPlayer, board, depth - 1);
      move.score = result.score;
      //reset spot to check different case on each depth
      board[availSpots[i]] = '';
  
      moves.push(move);
    }
};

export default aiMove;
