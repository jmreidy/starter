import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import App from './components/App';
import globalStyles from './app.global.css';
import configureStore from './reducers'

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', render);
}
