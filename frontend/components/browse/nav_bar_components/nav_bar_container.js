import { connect } from 'react-redux';
import { logout } from '../../../actions/session_action';
import { fetchMovies } from '../../../actions/movies_action';
import NavBar from './nav_bar';

const mapStateToProps = ({entities: {users, movies}, session}, ownProps) => ({
  user: users[session["id"]],
  movies: Object.values(movies)
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);