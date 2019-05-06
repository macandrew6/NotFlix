import React from 'react';

class BrowseIndexItem extends React.Component {
  render() {
    console.log("im here baby")
    const { movies, genres } = this.props;
    console.log(movies);
    console.log(genres);
    return (
      <div style={{background: "white"}}>
        ima a list
      </div>
    );
  }
}

export default BrowseIndexItem;