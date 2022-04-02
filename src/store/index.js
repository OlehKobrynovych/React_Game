import { createStore } from 'redux';
import gameReducer from './gameReducer';

export const store = createStore(gameReducer);



