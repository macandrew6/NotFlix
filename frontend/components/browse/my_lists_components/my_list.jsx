import React from 'react';
import NavBarContainer from '../nav_bar_components/nav_bar_container.js';
import MovieThumbnailContainer from '../movie_components/movieThumbnail_container';

class MyList extends React.Component {
  constructor(props){
    super(props);
  }
 
  componentDidMount() {
    this.props.fetchUserMovies();
  }

  render() {
    const { movies, user } = this.props;
    return (
      <div className="my-list-page">
        <NavBarContainer />
        <h2>My List</h2>
        <div className="my-list-movies-container">
          {movies.map(userMovie => (
            <MovieThumbnailContainer
              key={userMovie.id} 
              movie={userMovie}
              user={user}  
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MyList;