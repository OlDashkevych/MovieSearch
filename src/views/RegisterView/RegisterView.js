import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import withAuthRedirect from '../../common/hoc/withAuthRedirect';
import authOperations from '../../redux/auth/authOperations';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });

    // this.setStaet({ name: '', email: '', password: '' })
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.registerView}>
        <h1 className={styles.title}>Register page</h1>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.registerInput}
              placeholder="Enter your name"
              minLength="1"
            />
          </label>

          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.registerInput}
              placeholder="Enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.registerInput}
              placeholder="Enter your password"
              minLength="7"
            />
          </label>

          <button type="submit" className={styles.confirmButton}>
            Register
          </button>
          <Link to="/login" className={styles.link}>
            or LogIn
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: credentials => dispatch(authOperations.registerUser(credentials)),
});

export default compose(
  withAuthRedirect,
  connect(
    null,
    mapDispatchToProps,
  ),
)(RegisterView);
