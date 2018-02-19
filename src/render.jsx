import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './redux/store';
import App from './App/App';

ReactDOM.render(
  <Provider store={initStore()}><App /></Provider>,
  document.getElementById('root'),
);
