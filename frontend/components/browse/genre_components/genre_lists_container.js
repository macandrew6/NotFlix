import { connect } from 'react-redux';
import GenreLists from './genre_lists';
import { fetchMovies, updateMovie } from '../../../actions/movies.js';
import { postUserMovie } from '../../../actions/my_list.js';

const mapStateToProps = ({entities: { movies, userMovies, users }, session}, ownProps) => ({
  user: users[session.id],
  genre: ownProps.genre,
  userMovies: Object.values(userMovies),
  movies: Object.values(movies),
  moviesInGenre: Object.values(ownProps.movies)
    .filter(movie => ownProps.genre.movieIds.includes(movie.id))
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  postUserMovie: (assData) => dispatch(postUserMovie(assData)),
  updateMovie: (movieData) => dispatch(updateMovie(movieData)) 
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreLists);
