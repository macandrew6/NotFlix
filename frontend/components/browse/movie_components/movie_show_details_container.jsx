import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieShowDetails from './movie_show_details';

const mapStateToProps = ({ entities: { movies }}, ownProps) => {
  return {
    movie: movies[ownProps.match.params.movieId]
  };
};

const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieShowDetails);