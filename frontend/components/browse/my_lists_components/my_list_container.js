import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserMovies } from '../../../actions/my_list_action.js';
import { fetchMovies } from '../../../actions/movies_action';
import MyList from './my_list';

const mapStateToProps = ({ entities: { userMovies, movies, users }, session}) => {
  return {
    user: users[session.id],
    movies: Object.values(movies).filter(movie => {
      if (userMovies[movie.id]) {
        console.log("user Movie @ movie id => ", userMovies[movie.id].id);
        return movies[userMovies[movie.id].id];
      }
    })
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserMovies: () => dispatch(fetchUserMovies()),
  fetchMovies: () => dispatch(fetchMovies())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList));

