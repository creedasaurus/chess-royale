import React from 'react';
import { connect } from 'react-redux';
import Chess from 'react-chess';

const ChessBoard = () => (
  <div>
    <div>
      <Chess />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  const { gameState } = state;
  return {
    gameState,
  };
};

export default connect(mapStateToProps)(ChessBoard);
