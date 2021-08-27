import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviesReducer from './movies/moviesReducer';
import userReducer from './user/userReducer';
import tabsReducer from './tabs/tabsReducer';
import tvShowsReducer from './tv_shows/TvShowsReducer';

export default combineReducers({
  movies: moviesReducer,
  tv_shows: tvShowsReducer,
  user: userReducer,
  tabs: tabsReducer,
  form: formReducer
});
