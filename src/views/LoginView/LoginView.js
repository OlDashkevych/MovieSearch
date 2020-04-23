import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../common/hoc/withAuthRedirect';
import authOperations from '../../redux/auth/authOperations';
import styles from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });

    // this.setStaet({ name: '', email: '', password: '' })
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.loginView}>
        <h1 className={styles.title}>Login page</h1>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.loginInput}
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
              className={styles.loginInput}
              placeholder="Enter your password"
              minLength="7"
            />
          </label>

          <button type="submit" className={styles.confirmButton}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   onLogin: credentials => dispatch(authOperations.loginUser(credentials)),
// });

const mapDispatchToProps = {
  onLogin: authOperations.loginUser,
};

export default compose(
  withAuthRedirect,
  connect(
    null,
    mapDispatchToProps,
  ),
)(LoginView);
