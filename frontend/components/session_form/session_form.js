import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  render() {
    const { formType } = this.props;
    return (
      <div className="session-form-container">
        <h2>{formType}</h2>
        <form onSubmit={this.handleSubmit} className="session-form">
          <label> Email:
            <input 
              type="text"
              placeholder="Email or phone number"
              value={this.state.email}
              onChange={this.update('email')}  
            />
          </label>
          <label> Password:
            <input
              type="text"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>

          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default SessionForm;