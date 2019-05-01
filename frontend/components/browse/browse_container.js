import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Browse from './browse';

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Browse);