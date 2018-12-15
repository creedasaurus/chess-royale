import { START_GAME, END_GAME } from '../actions/index';

const defaultGameState = {
  turns: 0,
  status: 'stopped',
};

const gameStateReducer = (state = defaultGameState, action) => {
  const { type } = action;
  switch (type) {
    case START_GAME:
      return { ...defaultGameState, ...{ status: 'in_progress' } };
    case END_GAME:
      return { ...defaultGameState, ...{ status: 'stopped' } };
    default:
      return state;
  }
};

export default gameStateReducer;
