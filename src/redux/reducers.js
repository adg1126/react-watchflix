import { combineReducers } from 'redux';
import moviesReducer from './movies/moviesReducer';

export default combineReducers({ movies: moviesReducer });
