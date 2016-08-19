import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as ReactRoot } from 'react-hot-loader';

// Import Rx; Allows us to use chained observable methods
// eslint-disable-next-line no-unused-vars
import Rx from 'rxjs';

// Import styles that will be in the global css scope
// eslint-disable-next-line no-unused-vars
import globalStyles from './app.global.css';

import configureStore from './configureStore';

import Routes from './routes';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <ReactRoot>
      <Routes store={store} />
    </ReactRoot>,
    document.getElementById('root')
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App/AppContainer', render);
}
