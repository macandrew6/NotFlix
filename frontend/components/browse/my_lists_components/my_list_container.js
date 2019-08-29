import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserMovies } from '../../../actions/my_list_action.js';
import MyList from './my_list';

const mapStateToProps = ({ entities: { userMovies, movies, users }, session}) => {
  return {
    user: users[session.id],
    movies: Object.values(movies).filter(movie => {
      if (userMovies[movie.id]) {
        return userMovies[movie.id];
      }
    }),
    userMovies: Object.values(userMovies)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserMovies: () => dispatch(fetchUserMovies())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList));

