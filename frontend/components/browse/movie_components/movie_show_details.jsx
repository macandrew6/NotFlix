import React from 'react';

class MovieShowDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  componentDidMount() {
    // fetch movie from DB;
  }

  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div >
        HEY IM THE SHOW DETAILS
      </div>
    );
  }
}


export default MovieShowDetails;