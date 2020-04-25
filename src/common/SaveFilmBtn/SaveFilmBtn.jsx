import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import styles from './SaveFilmBtn.module.css';

class SaveFilmBtn extends Component {
  state = { isExist: false };

  componentDidMount() {
    const persistedIds = localStorage.getItem('ID');
    if (persistedIds) {
      const parsedIds = JSON.parse(persistedIds);
      const idExist = parsedIds.includes(this.props.id);
      if (idExist) {
        this.setState({ isExist: true });
      }
    }
  }

  handleSaveToggle = () => {
    const { isExist } = this.state;
    const { id } = this.props;
    let persistedIds = JSON.parse(localStorage.getItem('ID'));
    if (id) {
      if (persistedIds) {
        const idExist = persistedIds.includes(id);
        if (idExist) {
          this.setState({ isExist: !isExist });
          persistedIds = persistedIds.filter(el => el !== id);
          localStorage.setItem('ID', JSON.stringify(persistedIds));
          return;
        }
        persistedIds.push(id);
        localStorage.setItem('ID', JSON.stringify(persistedIds));
        this.setState({ isExist: true });
        return;
      }
      localStorage.setItem('ID', JSON.stringify([id]));
      this.setState({ isExist: false });
    }
  };

  render() {
    const { isExist } = this.state;
    return (
      <button
        onClick={this.handleSaveToggle}
        className={styles.addBtn}
        style={{ backgroundColor: !isExist ? '#5c83a7' : '#a75c5c' }}
      >
        {isExist ? (
          <>
            <FontAwesomeIcon icon={faMinus} className={styles.sign} />
            <span className={styles.text}>delete from my films</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPlus} className={styles.sign} />
            <span className={styles.text}>add to my films</span>
          </>
        )}
      </button>
    );
  }
}

export default SaveFilmBtn;
