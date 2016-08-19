import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import styles from './AppContainer.css';
import { ping } from '../../actions/pingPongActions';

const App = ({ isPinging = false, count, onPingClick, route }) => (
  <div className={styles.app}>
    <h1>is pinging: {isPinging.toString()}</h1>
    <h2 className="test">Test {count}</h2>
    <h3>Route is: {route}</h3>
    <button onClick={onPingClick}>Start PING</button>
  </div>
);

App.propTypes = {
  count: React.PropTypes.number,
  isPinging: React.PropTypes.bool,
  onPingClick: React.PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  route: ownProps.params.filter || 'none',
  isPinging: state.pingPong.isPinging,
  count: state.root.count,
});

const ConnectedApp = connect(
  mapStateToProps,
  { onPingClick: ping }
)(App);

export default withRouter(ConnectedApp);
