import { connect } from 'react-redux';
import { fetchMoviesStart } from '../redux/movies/moviesActions';
import App from '../App';

export default connect(null, { fetchMoviesStart })(App);
