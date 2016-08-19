import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App/AppContainer';

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)*" component={App} />
    </Router>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
