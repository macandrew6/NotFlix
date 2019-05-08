import { connect } from 'react-redux';
import { logout } from '../../../actions/session';
import { fetchMovies } from '../../../actions/movies';
import NavBar from './nav_bar';

const mapStateToProps = ({entities: {users}, session}, ownProps) => ({
  user: users[session["id"]],
  movies: Object.values(ownProps.movies)
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);