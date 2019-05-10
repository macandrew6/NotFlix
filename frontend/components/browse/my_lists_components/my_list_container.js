import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserMovies } from '../../../actions/my_list';
import MyList from './my_list';

const mapStateToProps = ({ entities: { userMovies, users }, session}) => ({
  user: users[session.id],
  userMovies: Object.values(userMovies)
});


const mapDispatchToProps = dispatch => ({
  fetchUserMovies: () => dispatch(fetchUserMovies())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList));

