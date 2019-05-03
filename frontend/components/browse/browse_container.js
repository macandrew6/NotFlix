import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import { fetchMovies } from '../../actions/movies'; 
import Browse from './browse';

const mapStateToProps = state => ({
  movies: Object.keys(state.entities.movies).map(id => state.entities.movies[id])
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);