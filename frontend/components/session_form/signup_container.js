import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    formType: 'Sign Up',
    errors: state.errors.sessionErrors
  };
};

const mapDispatchToProps = dispatch => ({
  action: userForm => dispatch(signup(userForm)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);