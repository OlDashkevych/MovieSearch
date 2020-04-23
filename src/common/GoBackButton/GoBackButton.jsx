import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './GoBackButton.module.css';

const GoBackButton = ({ onGoBack }) => {
  return (
    <button type="button" onClick={onGoBack} className={styles.button}>
      <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} /> Go back
    </button>
  );
};

export default GoBackButton;
