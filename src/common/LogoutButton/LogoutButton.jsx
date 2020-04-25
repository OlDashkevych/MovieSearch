import React from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import styles from './LogoutButton.module.css';
import ExitToApp from '@material-ui/icons/ExitToApp';

const LogoutButton = ({ onLogout }) => (
  <button className={styles.button} type="button" onClick={onLogout}>
    <span className={styles.textBtn}>Logout</span>
    <ExitToApp />
  </button>
);

const mdtp = dispatch => ({
  onLogout: () => dispatch(authOperations.logoutUser()),
});

export default connect(
  null,
  mdtp,
)(LogoutButton);
