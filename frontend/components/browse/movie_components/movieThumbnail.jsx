import React from 'react';
import { Link } from 'react-router-dom';
import { Player, ControlBar } from 'video-react';

class MovieThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.sources = {
      trailer: this.props.movie.trailerUrl,
      movie: this.props.movie.movieUrl
    };
    this.state = {
      height: 185,
      width: 322,
      source: this.sources.trailer,
      autoplay: false,
      toggleControls: false,
      show: false,
      showClassName: "hide"
    };
  
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.openShowPage = this.openShowPage.bind(this);
    this.closeShowPage = this.closeShowPage.bind(this);
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
      height: 230,
      width: 402
    });
    setTimeout(() => {
      this.play();
    }, 300);
  }

  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({
      height: 185,
      width: 322,
    });
    setTimeout(() => {
      this.pause();
      this.load();
    }, 400);
  }

  openShowPage(e) {
    e.preventDefault();
    this.setState({
      show: true,
      showClass: "show"
    });
  }

  closeShowPage(e) {
    e.preventDefault();
    this.setState({
      show: false,
      showClass: "hide"
    });
  }
      
  render() {

    const { movie } = this.props;
    const { width, height, source, autoplay } = this.state;

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
        <div className="toggle-thumbnail-sound" onClick={this.toggleSound(false)}>
          <i className="fas fa-volume-up"></i>
        </div>
      </div>
    );
  }
}


export default MovieThumbnail;