import { connect } from 'react-redux';
import GenreLists from './genre_lists';
import { fetchMovies } from '../../../actions/movies.js';

const mapStateToProps = ({entities: { movies }}, ownProps) => ({
  genre: ownProps.genre,
  moviesInGenre: Object.values(ownProps.movies)
    .filter(movie => ownProps.genre.movieIds.includes(movie.id))
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});


export default connect(
  mapStateToProps,
  null
)(GenreLists);
