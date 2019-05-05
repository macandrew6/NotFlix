import React from 'react';
import { Player, ControlBar, PlayToggle, BigPlayButton } from 'video-react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 130,
      width: 229,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
  }
  
  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange);
  }

  handleStateChange(state) {
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
  
  handleMouseEnter() {
    this.setState({
      height: 200,
      width: 370
    });
    setTimeout(() => {
      this.play();
    }, 100);
  }

  handleMouseLeave() {
    this.setState({
      height:130,
      width: 229
    });
    setTimeout(() => {
      this.pause();
      this.load();
    }, 300);
  }

  render() {
    const { movie } = this.props;
    const { muted, width, height, poster } = this.state;

    return (
      <div 
        className="temp-single-movie-thumbnail-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <Player 
          ref={(p) => {
            this.player = p;
          }}
          fluid={false}
          poster={movie.imageUrl}
          src={movie.movieUrl}
          width={width}
          height={height}
          controls={false}
        >
          <ControlBar disableDefaultControls/>
        </Player>
        <button onClick={this.toggleSound(false)}>sound</button>
      </div>
    );
  }
}

// onstart render a button that controls volume and a place holder button for adding movie to list

export default Movie;