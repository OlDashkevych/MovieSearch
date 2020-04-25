import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/authSelectors';
import styles from './AppBar.module.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Appar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <div className={styles.headerNav}>
      <ThemeSwitcher />
      <Navigation />
      {isAuthenticated && <UserMenu />}
    </div>
  </header>
);

const mapStateToPtops = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToPtops)(Appar);
