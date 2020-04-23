import React from 'react';
import styles from './NotFound.module.css';

const NotFound = ({ title }) => {
  return <div className={styles.notFoundBlock}>{title} not found</div>;
};

export default NotFound;
