import { connect } from 'react-redux';
import { logout } from '../../../actions/session';
import { fetchMovies } from '../../../actions/movies'; 
import { fetchGenres } from '../../../actions/genres'; 

import Browse from './browse';

const mapStateToProps = ({entities: { movies, genres, movieGenres }}) => ({
  initVideo: Object.values(movies)[4],
  movies: Object.keys(movies).map(id => movies[id]),
  genres: Object.keys(genres).map(id => genres[id])
});

const mapDispatchToProps = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
  fetchMovies: () => dispatch(fetchMovies()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);