import { connect } from 'react-redux';
import GenreLists from './genre_lists';

const mapStateToProps = ({entities: { movies }}, ownProps) => ({
  movies: Object.keys(movies).map(id => movies[id]),
  genre: ownProps.genre
});


export default connect(
  mapStateToProps
)(GenreLists);