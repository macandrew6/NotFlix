import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: 'ChuckNorris@gmail.com',
      password: 'numbchucks'
    };
    this.props.action(demoUser);
    this.setState({
      email: '',
      password: ''
    });
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
    this.setState({
      email: '',
      password: ''
    });
  }

  handleErrors() {
    return (
      <ul>
        {this.props.errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;

    return (
      <div className="session-page">
        <header>
          <Link
            to="/"
            className="logo"> 
          </Link>
          {formType !== 'Sign Up' ? <button onClick={this.handleDemoUser}>Demo</button> : ''}
        </header>
        <div className="session-form-container">
          <h2 className="form-title">{formType}</h2>
          <form onSubmit={this.handleSubmit} className="session-form">
            <input 
              type="text"
              placeholder="Email or phone number"
              value={this.state.email}
              onChange={this.update('email')}  
            />
            <input
              type="text"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <div className="errors">{this.handleErrors()}</div>
            <input 
              className="submit-form-btn" 
              type="submit" 
              value={this.props.formType}/>
            </form>
          </div>
        
      </div>
    );
  }
}

export default SessionForm;