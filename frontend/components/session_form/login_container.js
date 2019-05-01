import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    formType: 'Sign In',
    errors: state.errors.sessionErrors
  };
};

const mapDispatchToProps = dispatch => ({
  signin: userForm => dispatch(login(userForm)),
  action: userForm => dispatch(login(userForm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);