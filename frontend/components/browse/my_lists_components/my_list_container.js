import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserMovies } from '../../../actions/my_list_action.js';
import { fetchMovies } from '../../../actions/movies_action';
import MyList from './my_list';

const mapStateToProps = ({ entities: { userMovies, movies, users }, session}) => {
  return {
    user: users[session.id],
    userMoviesKeys: Object.values(userMovies).map(userMovie => userMovie.id),
    movies: Object.values(movies)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserMovies: () => dispatch(fetchUserMovies()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList));

