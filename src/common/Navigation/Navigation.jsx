import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { HamburgerArrow } from 'react-animated-burgers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faMapPin,
  faFilm,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import routes from '../../routes/routes';
import authSelectors from '../../redux/auth/authSelectors';
import styles from './Navigation.module.css';

class Navigation extends Component {
  state = {
    isBurgerActive: false,
  };

  toggleButton = () => {
    this.setState({
      isBurgerActive: !this.state.isBurgerActive,
    });
  };

  render() {
    const { isAuthenticated } = this.props;
    const { isBurgerActive } = this.state;
    return (
      <>
        {
          <nav
            className={styles.nav}
            style={{
              left: isBurgerActive ? '0' : '-200%',
            }}
          >
            <NavLink
              exact
              to={routes.HOME.path}
              className={styles.link}
              activeStyle={{ color: '#c94e50' }}
              onClick={this.toggleButton}
            >
              <FontAwesomeIcon className={styles.icon} icon={faHome} />
              Home
            </NavLink>
            {isAuthenticated && (
              <>
                <NavLink
                  to={routes.TASKS.path}
                  className={styles.link}
                  activeStyle={{ color: '#c94e50' }}
                  onClick={this.toggleButton}
                >
                  <FontAwesomeIcon className={styles.icon} icon={faMapPin} />
                  My films
                </NavLink>
                <NavLink
                  to={routes.MAIN.path}
                  className={styles.link}
                  activeStyle={{ color: '#c94e50' }}
                  onClick={this.toggleButton}
                >
                  <FontAwesomeIcon className={styles.icon} icon={faFilm} />
                  Movies
                </NavLink>
              </>
            )}
            {!isAuthenticated && (
              <>
                <NavLink
                  to={routes.REGISTER.path}
                  className={styles.link}
                  activeStyle={{ color: '#c94e50' }}
                  onClick={this.toggleButton}
                >
                  Register
                </NavLink>
                <NavLink
                  to={routes.LOGIN.path}
                  className={styles.link}
                  activeStyle={{ color: '#c94e50' }}
                  onClick={this.toggleButton}
                >
                  Login
                </NavLink>
              </>
            )}
            <FontAwesomeIcon
              className={styles.closeIcon}
              icon={faTimes}
              onClick={this.toggleButton}
            />
          </nav>
        }
        <HamburgerArrow
          className={styles.hamburger}
          isActive={isBurgerActive}
          toggleButton={this.toggleButton}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
