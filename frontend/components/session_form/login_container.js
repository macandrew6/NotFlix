import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    formType: 'Sign In',
    errors: state.errors.sessionErrors
  };
};

const mapDispatchToProps = dispatch => ({
  action: userForm => dispatch(login(userForm)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);