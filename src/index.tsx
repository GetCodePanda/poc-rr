import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore'

ReactDOM.render(
  <Provider store = {store}>
    <App name = "test"/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();