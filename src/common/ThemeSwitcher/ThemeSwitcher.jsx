import React, { Component } from 'react';
import Switch from 'react-switch';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { switchTheme } from '../../redux/appTheme/appThemeActions';
import { getChecked } from '../../redux/appTheme/appThemeSelectors';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = ({ handleChange, checked }) => {
  return (
    <div className={styles.themeSwitcher}>
      <Switch
        onChange={handleChange}
        checked={checked}
        checkedIcon={
          <FontAwesomeIcon className={styles.leftIcon} icon={faMoon} />
        }
        uncheckedIcon={
          <FontAwesomeIcon className={styles.rightIcon} icon={faSun} />
        }
        onColor="#242341"
      />
    </div>
  );
};

const mdtp = dispatch => ({
  handleChange: () => dispatch(switchTheme()),
});

const mstp = state => ({
  checked: getChecked(state),
});

export default connect(
  mstp,
  mdtp,
)(ThemeSwitcher);
