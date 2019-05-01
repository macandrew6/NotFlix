import React from 'react';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { logout } = this.props;
    return (
      <div>
        <button onClick={this.props.logout}>LOGOUT!</button>
      </div>
    );
  }
}

export default Browse;