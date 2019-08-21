import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieThumbnail from './movieThumbnail';
import { postUserMovie } from '../../../actions/my_list_action';
import { updateMovie } from '../../../actions/movies_action';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  postUserMovie: (assData) => dispatch(postUserMovie(assData)),
  updateMovie: (movie) => dispatch(updateMovie(movie))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieThumbnail));