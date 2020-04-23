import React from 'react';
import { connect } from 'react-redux';
import { MeteorRainLoading } from 'react-loadingg';
import authSelectors from '../../redux/auth/authSelectors';

const AuthLoader = ({ loading }) => {
  return <>{loading ? <MeteorRainLoading /> : null}</>;
};

const mstp = state => ({
  loading: authSelectors.getLoading(state),
});

export default connect(mstp)(AuthLoader);
