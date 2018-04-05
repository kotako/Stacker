// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reducers from './reducers'
import registerServiceWorker from './config/registerServiceWorker';

import type { Store } from './types';

const store: Store = createStore(reducers);
const element: any = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
 );

registerServiceWorker();
