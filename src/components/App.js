import React from 'react';
import { connect } from 'react-redux';

import styles from './App.css';
import { ping } from '../redux/modules/ping';

const App = ({ isPinging = false, count, onPingClick }) => (
  <div className={styles.app}>
    <h1>is pinging: {isPinging.toString()}</h1>
    <h2 className="test">Test {count}</h2>

    <button onClick={onPingClick}>Start PING</button>
  </div>
);
App.propTypes = {
  isPinging: React.PropTypes.bool,
  onPingClick: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isPinging: state.ping.isPinging,
    count: state.base.count
  }
};

const ConnectedApp = connect(
  mapStateToProps,
  { onPingClick: ping }
)(App);

export default ConnectedApp;
