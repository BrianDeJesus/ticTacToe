import emptySpots from './emptySpots';
import computeWinningCombo from './computeWinningCombo';
import computeDraw from './computeDraw';

//state.board will be passed to board
const aiMove = (player, board, depth, aiTurn) => { //player and aiTurn should be state.currentTurn.turn
    // base cases
    if(board[computeWinningCombo(board)[0]] === aiTurn){
      return {score: 100 - depth};
    } else if(board[computeWinningCombo(board)[0]] === getOtherMove(aiTurn)){
        return {score: depth - 100};
    } else if (computeDraw(board)){
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
  
      otherPlayer = getOtherMove(player);
      let result = aiMove(otherPlayer, board, depth - 1, aiTurn);
      move.score = result.score;
      //reset spot to check different case on each depth
      board[availSpots[i]] = '';
  
      moves.push(move);
    }
    let bestMove;
    // maximize AI's winning chance
    if(player === aiTurn){
      let bestScore = -10000;
      for(let i = 0; i < moves.length; i++){
        if(moves[i].score > bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {// minimize your winning chance
      let bestScore = 10000;
      for(let i = 0; i < moves.length; i++){
        if(moves[i].score < bestScore){
          bestScore = moves[i].score;
          bestMove = i;
          }
      }
    }
    return moves[bestMove];
};

const getOtherMove = (move) => {
    return move === 'X' ? 'O' : 'X';
};

export default aiMove;
