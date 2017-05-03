import React from 'react';
import { Link } from 'react-router-dom';
import SessionHeader from '../session_header/session_header';

const nullLogin = {
  identifier: "",
  password: "",
  rememberMe: true
};

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRemember = this.updateRemember.bind(this);
    this.state = Object.assign({}, nullLogin);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateRemember() {
    this.setState({ rememberMe: !this.state.rememberMe });
  }

  handleSubmit(e) {
    e.preventDefault();
    // handle submit
  }

  render() {
    return (
      <div>
        <SessionHeader />
        <section className="login-form-box">
          <button type="button" className="fb-login-btn">Log In With Facebook</button>
          <section className="login-title-box">
            <p>or</p>
          </section>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              autoFocus="true"
              placeholder="Username or email address"
              value={this.state.identifier}
              onChange={this.update('identifier')} />

            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')} />

            <section className="submit-login-row">
              <p><input type="checkbox" id="rememberMe" checked={this.state.rememberMe} onClick={this.updateRemember} />Remember me</p>
              <button className="submit-login-btn">Log in</button>
            </section>
          </form>
          <Link to="/" className="session-link">Forgot your username or password?</Link>
          <p>Don't have an account? <Link to="/signup" className="session-link">Sign up</Link></p>
        </section>
      </div>
    );
  }
}

export default Login;
