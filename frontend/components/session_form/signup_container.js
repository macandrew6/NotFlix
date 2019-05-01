import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, logout } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    formType: 'Sign Up'
  };
};

const mapDispatchToProps = dispatch => ({
  action: userForm => dispatch(signup(userForm)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);