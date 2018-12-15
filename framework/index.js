const chessjs = require('chess.js');


const printFenBoard = (fen) => {
  const c = chessjs.Chess(fen);
  console.log(c.ascii());
  console.log(c.fen());
};


module.exports = {
  printFenBoard,
};
