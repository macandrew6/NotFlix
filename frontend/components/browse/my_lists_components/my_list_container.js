import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserMovies } from '../../../actions/my_list_action.js';
import MyList from './my_list';

const mapStateToProps = ({ entities: { userMovies, movies, users }, session}) => {
  return {
    user: users[session.id],
    movies: Object.values(movies).filter(movie => {
      let keys = Object.values(userMovies).map(userMovie => userMovie.id);
      if (keys.includes(movie.id)) {
        return movie;
      }
    })
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserMovies: () => dispatch(fetchUserMovies()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList));

