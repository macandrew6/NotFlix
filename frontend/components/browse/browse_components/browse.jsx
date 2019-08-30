import React from 'react';
import NavBarContainer from '../nav_bar_components/nav_bar_container.js';
import GenreListsContainer from '../genre_components/genre_lists_container';
import { Player } from 'video-react';

class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      showButtons: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
  }

  componentDidMount() {
    this.props.fetchGenres();
    this.props.fetchMovies();
    this.props.fetchUserMovies();
  }

  handleStateChange(state, prevState) {
    this.setState({
      player: state
    });
  }

  toggleSound(soundState) {
    return () => {
      if (this.player.muted) {
        this.player.muted = soundState;
      } else {
        this.player.muted = !soundState;
      }
    };
  }

  handleMouseEnter(e) {
    e.stopPropagation(); 
    e.preventDefault(); 
    
    this.setState({
      showButtons: true
    });

    setTimeout(() => {
      this.player.play();
    }, 300);
  }

  handleMouseLeave(e) {
    e.preventDefault();

    this.setState({
      showButtons: false
    });

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
    const { movies, genres, initVideo } = this.props;
    const { showButtons } = this.state;
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
            muted={true}
            load={true}
            src={initVideo.trailerUrl}
            autoPlay={true}
            loop={true}
          />
          {showButtons ? 
            <div className="init-vid-button-div">
              <div className="init-vid-sound" onClick={this.toggleSound(false)}>
                <i className="fas fa-volume-up"></i>
              </div>
            </div> : null
          }
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


