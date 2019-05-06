import { connect } from 'react-redux';
import { logout } from '../../../actions/session';
import { fetchMovies } from '../../../actions/movies'; 
import { fetchGenres } from '../../../actions/genres'; 
import { fetchAllMovieGenres } from '../../../actions/movie_genres';
import { allMoviesByGenre } from '../../../reducers/selectors';

import Browse from './browse';

const mapStateToProps = ({ entities: { movies, genres, movieGenres }}) => ({
  movies: Object.keys(movies).map(id => movies[id]),
  genres: Object.keys(genres).map(id => genres[id]),
});

const mapDispatchToProps = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
  fetchMovies: () => dispatch(fetchMovies()),
  fetchMovieGenres: () => dispatch(fetchAllMovieGenres()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);