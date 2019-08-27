import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieThumbnail from './movieThumbnail';
import { 
  postUserMovie, 
  removeUserMovie,
  fetchUserMovies 
} from '../../../actions/my_list_action';
import { updateMovie } from '../../../actions/movies_action';

const mapStateToProps = ({entities: { userMovies }}, ownProps) => {
  return {
    offSet: ownProps.offSet,
    movie: ownProps.movie,
    user: ownProps.user,
    isUserMovie: Boolean(userMovies[ownProps.movie.id]), // big change!
    userMovies: Object.keys(userMovies).map((keys, i) => {
      return [keys, Object.values(userMovies)[i]];
    })
  };
};

const mapDispatchToProps = dispatch => ({
  postUserMovie: (assData) => dispatch(postUserMovie(assData)),
  updateMovie: (movie) => dispatch(updateMovie(movie)),
  removeUserMovie: id => dispatch(removeUserMovie(id)),
  fetchUserMovies: () => dispatch(fetchUserMovies())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieThumbnail));