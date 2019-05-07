import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieWatch from './movie_watch';
import { fetchMovie } from '../../../actions/movies.js';

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.entities.movies[ownProps.match.params.movieId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: (id) => dispatch(fetchMovie(id))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieWatch));