import Axios from 'axios';
import 'node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { SubastifyClient } from './clients';
import store from './store';

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App subastifyClient={
            new SubastifyClient(Axios.create({ baseURL: 'http://localhost:3001' }))}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
