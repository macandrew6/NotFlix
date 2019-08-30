import { connect } from 'react-redux';
import { logout } from '../../../actions/session_action';
import { fetchMovies } from '../../../actions/movies_action'; 
import { fetchGenres } from '../../../actions/genres_action';
import { fetchUserMovies } from '../../../actions/my_list_action'; 

import Browse from './browse';

const mapStateToProps = ({entities: { movies, genres, movieGenres }}) => ({
  initVideo: Object.values(movies)[0],
  movies: Object.keys(movies).map(id => movies[id]),
  genres: Object.keys(genres).map(id => genres[id])
});

const mapDispatchToProps = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
  fetchMovies: () => dispatch(fetchMovies()),
  fetchUserMovies: () => dispatch(fetchUserMovies()),
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);