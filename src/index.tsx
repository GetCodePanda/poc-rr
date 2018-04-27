import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRoot from './routes';

ReactDOM.render(
  <AppRoot/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();