import React from 'react';
import NavBarContainer from '../nav_bar_components/nav_bar_container.js';
import GenreListsContainer from '../genre_components/genre_lists_container';
import { Player } from 'video-react';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    // this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchGenres();
    this.props.fetchMovies();
  }

  // handleStateChange(state, prevState) {
  //   this.setState({
  //     player: state
  //   });
  // }

  handleMouseEnter(e) {
    e.preventDefault();
    setTimeout(() => {
      this.player.play();
    }, 300);
  }

  handleMouseLeave(e) {
    e.preventDefault();
    setTimeout(() => {
      this.player.pause();
    }, 400);
  }

  // add scroll even listener or research onScroll react handler
  // window.addEventListener('scroll', this.handleScroll);
 
  // componentDidUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    const { movies, genres, fetchMovies, initVideo } = this.props;
    if (!initVideo) {
      return null;
    }
    return (
      <div className="browse-container">
        <NavBarContainer movies={movies}/>
        <div 
          className="init-video"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Player 
            ref={(p) => {
              this.player = p;
            }}
            load={true}
            src={initVideo.trailerUrl}
            autoPlay={true}
            loop={true}
          />
        </div>
        <div className="genre-lists">
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


