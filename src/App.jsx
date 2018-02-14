import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Back from './back';

const App = () => (
  <div className="complete"><Back /></div>
);

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

export default render;
