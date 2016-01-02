import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import Routes from './routes';

var routes = (
   <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>{Routes}</Router>
);

window.onload = () => {
  ReactDOM.render(routes, document.getElementById('app'));
};
