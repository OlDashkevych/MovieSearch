import React from 'react';
import Appbar from '../AppBar/AppBar';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import { getThemeColor } from '../../redux/appTheme/appThemeSelectors';
import Particles from 'react-particles-js';
import AuthLoader from '../AuthLoader/AuthLoader';
import particlesParams from '../../assets/particlesParams';
import styles from './Layout.module.css';

const Layout = ({ children, color }) => (
  <div style={{ backgroundColor: color }} className={styles.layout}>
    <MediaQuery minDeviceWidth={600}>
      <Particles className={styles.particles} params={particlesParams} />
    </MediaQuery>
    <AuthLoader />
    <Appbar />
    {children}
  </div>
);

const mstp = state => ({
  color: getThemeColor(state),
});

export default connect(mstp)(Layout);
