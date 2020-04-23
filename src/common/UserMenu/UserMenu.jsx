import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import LogoutButton from '../LogoutButton/LogoutButton';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <LogoutButton />
  </div>
);

const mstp = state => ({
  name: authSelectors.getName(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
});

const mdtp = dispatch => ({
  onLogout: () => dispatch(authOperations.logoutUser()),
});

export default connect(
  mstp,
  mdtp,
)(UserMenu);
