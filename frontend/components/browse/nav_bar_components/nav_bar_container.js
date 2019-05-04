import { connect } from 'react-redux';
import { logout } from '../../../actions/session';
import { fetchMovies } from '../../../actions/movies';
import NavBar from './nav_bar';

// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);