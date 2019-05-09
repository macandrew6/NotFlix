import React from 'react';
import MovieThumbnail from '../movie_components/movieThumbnail';
import LeftArrow from './left_arrow';
import RightArrow from './right_arrow';

class GenreLists extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      moviesInGenre: this.props.moviesInGenre,
      currentIndex: 0,
      translateValue: 0,
      showSliderButtons: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.goToPrevVideo = this.goToPrevVideo.bind(this);
    this.goToNextVideo = this.goToNextVideo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.moviesInGenre !== this.props.moviesInGenre) {
      let moviesInGenre = prevProps.moviesInGenre;
      this.setState({ moviesInGenre: moviesInGenre });
    }
  }

  handleMouseEnter(e) {
    e.preventDefault();
    this.setState({
      showSliderButtons: true
    });
  }

  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({
      showSliderButtons: false
    });
  }

  goToNextVideo() {
    if(this.state.currentIndex !== this.state.moviesInGenre.length-3) {
      this.setState(() => {
        return {
          currentIndex: this.state.currentIndex + 1,
          translateValue: this.state.translateValue - (this.slideWidth())
        };
      });
    }
  }

  goToPrevVideo() {
    if(this.state.currentIndex !== 0){
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + (this.slideWidth())
      }));
    }
  }

  slideWidth() {
    return document.querySelector('.movie-thumbnail-slide').clientWidth;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.moviesInGenre !== prevState.moviesInGenre) {
      return { moviesInGenre: nextProps.moviesInGenre};
    } else {
      return null;
    }
  }

  render() {
    const { genre } = this.props;
    const { moviesInGenre, showSliderButtons } = this.state;
    console.log(this.state.currentIndex);
    return (
      <div className="genre-lists-container">
        <h2 className="genre-title">{genre.name}</h2>
        <div 
          className="movie-thumbnail-slider"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {showSliderButtons ? <LeftArrow goToPrevVideo={this.goToPrevVideo}/> : null}
          <div 
            className="movie-thumbnail-slide-container"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.90s'
            }}>
              {
                moviesInGenre.map(movie => (
                  <MovieThumbnail key={movie.id} movie={movie} />
                ))
              }
          </div>
          {showSliderButtons ? <RightArrow goToNextVideo={this.goToNextVideo} /> : null}
        </div>
      </div>

    );
  }
}

export default GenreLists;