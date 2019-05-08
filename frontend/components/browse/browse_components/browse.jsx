import React from 'react';
import NavBarContainer from '../nav_bar_components/nav_bar_container.js';
import GenreListsContainer from '../genre_components/genre_lists_container';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenres();
    this.props.fetchMovies();
  }

  // add scroll even listener or research onScroll react handler
  // window.addEventListener('scroll', this.handleScroll);
 
  // componentDidUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    const { movies, genres, fetchMovies } = this.props;
    return (
      <div className="browse-container">
        <NavBarContainer />
        <div className="genre-lists">
          <div className="init-video"> IMMA BE A VIDEO </div>
            {
              genres.map((genre) => (
                <GenreListsContainer 
                  genre={genre} 
                  movies={movies}
                  key={genre.id}
                />
              ))
            };
        </div>
      </div>
    );
  }
}

export default Browse;


