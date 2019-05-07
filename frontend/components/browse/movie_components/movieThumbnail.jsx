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
      height: 130,
      width: 229,
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
    // this.handleFullScreenChange = this.handleFullScreenChange.bind(this); figure this out
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

  changeSource() {
    return () => {
      console.log(this.props.movie.movieUrl);
      this.setState({
        source: this.sources.movie,
        width: null,
        height: null,
        autoplay: !this.state.autoplay,
        toggleControls: !this.state.toggleControls
      });
      setTimeout(() => {
        this.player.toggleFullscreen();
        this.play();
      }, 300);
    };
  }
  
  handleMouseEnter(e) {
    e.preventDefault();
    this.setState({
      height: 200,
      width: 370
    });
    setTimeout(() => {
      this.play();
    }, 300);
  }

  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({
      height:130,
      width: 229
    });
    setTimeout(() => {
      this.pause();
      this.load();
    }, 300);
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
        className="temp-single-movie-thumbnail-container"
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
        <button onClick={this.toggleSound(false)}>sound</button>
        <button onClick={this.changeSource()}>play</button>
      </div>
    );
  }
}

// onstart render a button that controls volume and a place holder button for adding movie to list

export default MovieThumbnail;