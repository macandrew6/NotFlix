import React from 'react';
import NavBarContainer from '../nav_bar_components/nav_bar_container.js';
import MovieThumbnail from '../movie_components/movieThumbnail';

class MyList extends React.Component {
  constructor(props){
    super(props);
  }
 
  componentDidMount() {
    this.props.fetchUserMovies();
  }

  render() {
    const { userMovies, user } = this.props;
    return (
      <div className="my-list-page">
        <NavBarContainer />
        <h2>My List</h2>
        <div className="my-list-movies-container">
          {userMovies.map(userMovie => (
            <MovieThumbnail
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