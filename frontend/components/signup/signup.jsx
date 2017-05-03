import React from 'react';
import { Link } from 'react-router-dom';
import SessionHeader from '../session_header/session_header';

const nullSignup = {
  email: "",
  confirmEmail: "",
  password: "",
  username: "",
  dobMonth: "",
  dobDay: 0,
  dobYear: 0,
  gender: null
}

class Signup extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = Object.assign({}, nullSignup);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // handle submit
  }

  render() {
    return (
      <div>
        <SessionHeader />
        <section className="signup-form-box">
          <button type="button" className="fb-signup-btn">Sign Up With Facebook</button>
          <section className="signup-title-box">
            <p>or</p>
            <h2 className="signup-title">Sign up with your email address</h2>
          </section>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')} />

            <input
              type="email"
              placeholder="Confirm email"
              value={this.state.confirmEmail}
              onChange={this.update('confirmEmail')} />

            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')} />

            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')} />

            <button className="submit-signup-btn">Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/login" className="session-link">Log in</Link></p>
        </section>
      </div>
    );
  }
}

export default Signup;
