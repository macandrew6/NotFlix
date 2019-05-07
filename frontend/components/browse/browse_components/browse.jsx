import React from 'react';
import NavBarContainer from '../nav_bar_components/nav_bar_container.js';
import BrowseIndexItem from './browse_index_item';

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
    const { movies, genres } = this.props;
    return (
      <div className="browse-container">
        <NavBarContainer />
        {
          genres.map((genre) => (
            <BrowseIndexItem 
              genre={genre} 
              movies={movies}
              key={genre.id}
            />
          ))
        };
      </div>
    );
  }
}

export default Browse;


