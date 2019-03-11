import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'intersection-observer';

import { Provider } from "./context";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
