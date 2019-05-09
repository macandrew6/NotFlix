import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';

class MovieThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.sources = {
      trailer: this.props.movie.trailerUrl,
      movie: this.props.movie.movieUrl
    };
    this.state = {
      movieAddedToList: false,
      height: 149,
      width: 250,
      source: this.sources.trailer,
      autoplay: false,
      showButtons: false,
      toggleControls: false,
    };
  
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    // this.openShowPage = this.openShowPage.bind(this);
    // this.closeShowPage = this.closeShowPage.bind(this);
  }
  
  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange);
  }

  handleStateChange(state, prevState) {
    this.setState({
      player: state
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
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
    e.preventDefault();
    this.setState({
      height: 260,
      width: 460,
      showButtons: true
    });
    setTimeout(() => {
      this.play();
    }, 300);
  }

  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({
      height: 149,
      width: 250,
      showButtons: false
    });
    setTimeout(() => {
      this.pause();
      this.load();
    }, 400);
  }

  handleAddMovie(e) {
    e.preventDefault();
    
  }

  // openShowPage(e) {
  //   e.preventDefault();
  //   this.setState({
  //     show: true,
  //     showClass: "show"
  //   });
  // }

  // closeShowPage(e) {
  //   e.preventDefault();
  //   this.setState({
  //     show: false,
  //     showClass: "hide"
  //   });
  // }
      
  render() {

    const { movie } = this.props;
    const { width, height, source, autoplay, showButtons } = this.state;

    return (
      <div 
        className="movie-thumbnail-slide"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <Link to={`/browse/watch/${movie.id}`}>
          <Player 
            ref={(p) => {
              this.player = p;
            }}
            autoPlay={autoplay}
            fluid={false}
            poster={movie.imageUrl}
            src={source}
            width={width}
            height={height}
          >
          </Player>
        </Link>
        
        {showButtons ? 
          <div className="button-div">
            <div className="toggle-thumbnail-sound" onClick={this.toggleSound(false)}>
              <i className="fas fa-volume-up"></i>
            </div>
            <div className="add-movie-btn" onClick={this.handleAddMovie}>
              <i className="fas fa-plus"></i>
            </div>
          </div> : 
          null
        }
      </div>
    );
  }
}


export default MovieThumbnail;