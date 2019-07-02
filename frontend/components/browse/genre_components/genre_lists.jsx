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
      showSliderButtons: false,
      leftMostIndex: 0
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
      this.setState(() => {
        return {
          leftMostIndex: this.state.leftMostIndex + 1,
          currentIndex: this.state.currentIndex + 1,
          translateValue: this.state.translateValue - (this.slideWidth())
        };
      });
  }

  goToPrevVideo() {
      this.setState(prevState => ({
        leftMostIndex: this.state.leftMostIndex - 1,
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + (this.slideWidth())
      }));
  }

  getXOffsets(vidCount, leftMostIndex, marginWidth, thumbnailWidth) {
    let arr = [
      [marginWidth - thumbnailWidth * 2, false],
      [marginWidth - thumbnailWidth, true],
      [marginWidth, true],
      [marginWidth + thumbnailWidth, true],
      [marginWidth + thumbnailWidth * 2, true],
      [marginWidth + thumbnailWidth * 3, true],
      [marginWidth + thumbnailWidth * 4, true],
      [marginWidth + thumbnailWidth * 5, true],
      [marginWidth + thumbnailWidth * 6, false],
    ];

    while ( leftMostIndex <= 0 ) {
      leftMostIndex += vidCount;
    }

    while ( leftMostIndex >= vidCount ) {
      leftMostIndex -= vidCount;
    }

    while ( arr.length <= vidCount ) {
      arr.push(arr[arr.length - 1].slice());
    }

    for (let i = 0; i <= leftMostIndex; i++) {
      arr.unshift(arr.pop());
    }

    return arr;
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
    const { genre, postUserMovie, user } = this.props;
    const { moviesInGenre, showSliderButtons, leftMostIndex } = this.state;

    const offSets = this.getXOffsets(moviesInGenre.length, leftMostIndex, 30, 250);

    return (
      <div className="genre-lists-container">
        <h2 className="genre-title">{genre.name}</h2>
        <div 
          className="movie-thumbnail-slider"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
        {showSliderButtons ? <LeftArrow goToPrevVideo={this.goToPrevVideo}/> : null}
        <div className="movie-thumbnail-slide-container">
            {
              moviesInGenre.map((movie, idx) => (
                <MovieThumbnail 
                  idx={idx}
                  offSet={offSets[idx]}
                  key={movie.id} 
                  movie={movie} 
                  user={user}
                  postUserMovie={postUserMovie}
                />
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